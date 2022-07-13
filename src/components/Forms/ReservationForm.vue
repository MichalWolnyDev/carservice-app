<template>
  <div class="reservation">
    <div class="reservation__wrap">
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
        </div>
      </transition>
      <transition name="fade">
        <div class="reservation__step" v-if="showSteps.step2">
          <p class="reservation__step-title">3. Dodatkowa wiadomość</p>
          <div class="reservation__textarea">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
export default {
  name: "ReservationForm",
  components: {
    CustomSelect,
  },
  data() {
    return {
      exampleCars: ["Mazda", "Opel"],
      selectedCar: "",
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
          console.log("dupa");
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
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>