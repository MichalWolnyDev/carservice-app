<template>
  <div class="reservation">
    <div class="reservation__wrap">
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
        <br>
        <p>
          <strong> Godziny otwarcia: </strong>
        </p>
        <p>Pn - Pt: {{ getChosenGarage.hoursWeek }}</p>
        <p>Sobota: {{ getChosenGarage.hoursSaturday }}</p>
        <p>Niedziela: {{ getChosenGarage.horusSunday }}</p>
      </div>
      <div class="reservation__step">
        <p class="reservation__step-title">1. Wybierz swój pojazd</p>
        <div class="reservation__car">
          <CustomSelect
            :options="exampleCars"
            :default="'Wybierz pojazd'"
            class="select"
            @input="chooseOption($event)"
          />
        </div>
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
            {{ selectedDate }}
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
            <Button :green="true" @click.native="$emit('openModal', true)">
              Wyślij
            </Button>
          </div>
        </div>
      </transition>
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
      exampleCars: [{
        name: "Mazda"
      },
      {
        name: "Opel"
      }],
      selectedCar: "",
      selectedDate: "",
      reservationMsg: "",
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
};
</script>
<style lang="scss">
.reservation {
  &__garage{
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
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>