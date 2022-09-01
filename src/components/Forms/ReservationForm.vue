<template>
  <div class="reservation">
    <div class="reservation__wrap" v-if="!success">
      <div class="reservation__garage">
        <p>
          <strong> Wybrany serwis: </strong>
        </p>
        <p>
          {{ getChosenGarage.name }}
        </p>
        <p>
          {{ getChosenGarage.address }}, {{ getChosenGarage.postCode }}
          {{ getChosenGarage.city.name }}
        </p>
        <br />
        <p>
          <strong> Godziny otwarcia: </strong>
        </p>
        <p>Pn - Pt: {{ getChosenGarage.hoursWeek }}</p>
        <p>Sobota: {{ getChosenGarage.hoursSaturday }}</p>
        <p>Niedziela: {{ getChosenGarage.horusSunday }}</p>
      </div>
      <div class="reservation__step" v-if="getUserCars.length > 0">
        <p class="reservation__step-title">1. Wybierz swój pojazd</p>
        <div class="reservation__car">
          <CustomSelect
            :options="tempUserCars"
            :reservationForm="true"
            :default="'Wybierz pojazd'"
            class="select"
            @input="chooseOption($event)"
          />
        </div>
      </div>
      <div class="reservation__step" v-else>
        <p class="reservation__step-title">
          Nie posiadasz dodanych samochodów na swoim koncie
        </p>
      </div>
      <transition name="fade">
        <div class="reservation__step" v-if="showSteps.step2">
          <p class="reservation__step-title">
            2. Wybierz odpowiadający Ci termin wizyty
          </p>
          <div class="reservation__calendar">
            <vc-date-picker
              :min-date="new Date()"
              v-model="selectedDate"
            :model-config="modelConfig"

            ></vc-date-picker>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="reservation__step" v-if="showSteps.step2">
          <p class="reservation__step-title">3. Dodatkowa wiadomość</p>
          <div class="reservation__textarea">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              v-model="reservationMsg"
            ></textarea>
          </div>
          <div class="reservation__button">
            <!-- @click.native="$emit('openModal', true)" -->
            <Button :green="true" @click.native="addBooking"> Wyślij </Button>
          </div>
          <div class="reservation__error-wrap" v-if="error">
            <p class="reservation__error">Wybierz proponowaną datę wizyty!</p>
          </div>
        </div>
      </transition>
    </div>
    <div v-else>
      <p>Dziękujemy za złożenie rezerwacji! :)</p>
    </div>
  </div>
</template>
<script>
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
import Button from "@/components/Inputs/Button.vue";

import search from "@/mixins/search";

export default {
  name: "ReservationForm",
  mixins: [search],
  components: {
    CustomSelect,
    Button,
  },
  data() {
    return {
      tempUserCars: [],
      selectedCar: {},
      selectedDate: "",
      reservationMsg: "",
      error: false,
      success: false,
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
      showSteps: {
        step1: true,
        step2: false,
      },
    };
  },
  methods: {
    chooseOption(e) {
      console.log(e);
      this.selectedCar = e;
    },
    userCarsSelect() {
      return this.getUserCars.filter((e) => this.tempUserCars.push({model: e.model, id: e.id}));
    },
    async addBooking() {
      const BASE_URL = process.env.VUE_APP_BASEURL;
      let token = localStorage.getItem("token");

      if (this.selectedDate != "" && this.selectedCar != "") {
        this.error = false;
        await this.$axios
          .post(
            BASE_URL + "/bookings",
            {
              date: this.selectedDate,
              message: this.reservationMsg,
              carId: this.selectedCar.id,
              garageId: this.getChosenGarage.id,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.status == 200) {
              this.success = true;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.error = true;
      }
    },
  },
  watch: {
    selectedCar: {
      handler() {
        if (this.selectedCar != "") {
          this.showSteps.step2 = true;
        }
      },
      deep: true,
    },
  },
  mounted() {
    var _this = this;

    setTimeout(() => {
      _this.userCarsSelect();
    }, 1500);
  },
};
</script>
<style lang="scss">
.reservation {
  &__garage {
    padding-bottom: 2rem;
  }
  &__wrap {
    padding-bottom: 2rem;
  }
  &__step {
    margin-bottom: 30px;
    &-title {
      margin-bottom: 20px;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
  &__textarea {
    textarea {
      width: 100%;
      resize: vertical;
      border-radius: 6px;
      border: 1px solid rgba(141, 141, 141, 0.2);
      box-shadow: 0px 0px 20px -10px black;
      font-family: inherit;
      padding: 20px;
    }
  }
  &__button {
    text-align: center;
    padding: 30px 0;
  }
  &__error {
    color: $redError;
    text-align: center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>