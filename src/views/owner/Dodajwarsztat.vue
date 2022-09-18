<template>
  <div>
    <h2 class="title title__h2 text__center">Dodaj warsztat</h2>
    <div class="addGarage">
      <div v-if="!getGarageAdded">
        <div class="addGarage__form">
          <div class="addGarage__form-wrap">
            <div class="addGarage__form-item">
              <Input
                v-model.trim="$v.form.name.$model"
                :error="$v.form.name.$error"
              >
                <template> Nazwa warsztatu </template>
              </Input>
              <p class="addGarage__form-error" v-if="$v.form.name.$error">
                To pole jest wymagane
              </p>
            </div>
            <div class="addGarage__form-item">
              <CustomSelect
                v-if="getCities.content"
                :textMode="true"
                :options="
                  filteredCities.length == 0
                    ? getCities.content
                    : filteredCities
                "
                :default="'Wybierz miasto'"
                :isError="cityError"
                class="select"
                @input="form.cityId = $event.id"
                @typetext="filterGarages($event)"
              >
                <template> Miasto </template>
              </CustomSelect>

              <p class="addGarage__form-error" v-if="cityError">
                To pole jest wymagane
              </p>
            </div>
            <div class="addGarage__form-item">
              <Input
                v-model.trim="$v.form.address.$model"
                :error="$v.form.address.$error"
              >
                <template> Adres </template>
              </Input>
              <p class="addGarage__form-error" v-if="$v.form.address.$error">
                To pole jest wymagane
              </p>
            </div>
            <div class="addGarage__form-item">
              <Input
                v-model.trim="$v.form.postCode.$model"
                :error="$v.form.postCode.$error"
              >
                <template> Kod pocztowy </template>
              </Input>
              <p class="addGarage__form-error" v-if="$v.form.address.$error">
                To pole jest wymagane
              </p>
            </div>
            <div class="addGarage__form-item">
              <Input
                v-model.trim="$v.form.hoursWeek.$model"
                :error="$v.form.hoursWeek.$error"
              >
                <template> Godziny pracy w tygodniu </template>
              </Input>
              <p class="addGarage__form-error" v-if="$v.form.hoursWeek.$error">
                To pole jest wymagane
              </p>
            </div>
            <div class="addGarage__form-item">
              <Input
                v-model.trim="$v.form.hoursSaturday.$model"
                :error="$v.form.hoursSaturday.$error"
              >
                <template> Godziny pracy w sobotę </template>
              </Input>
              <p
                class="addGarage__form-error"
                v-if="$v.form.hoursSaturday.$error"
              >
                To pole jest wymagane
              </p>
            </div>
            <div class="addGarage__form-item">
              <Input
                v-model.trim="$v.form.hoursSunday.$model"
                :error="$v.form.hoursSunday.$error"
              >
                <template> Godziny pracy w niedziele </template>
              </Input>
              <p
                class="addGarage__form-error"
                v-if="$v.form.hoursSunday.$error"
              >
                To pole jest wymagane
              </p>
            </div>
            <div class="addGarage__form-item">
              <Input v-model="form.mapURL">
                <template> Link do mapy Google </template>
              </Input>
            </div>
            <div class="addGarage__form-item">&nbsp;</div>
          </div>
          <div class="addGarage__form-services">
            <p class="addGarage__form-label">Usługi</p>
            <Checkbox
              v-for="service in getServices"
              :label="service.label"
              :inputVal="service.id"
              :key="service.id"
              class="addGarage__form-service"
              v-model="form.selectedServices"
              @change="setParam({})"
            />
          </div>
        </div>
        <div class="addGarage__top">
          <Button
            :green="true"
            @click.native.prevent="confirmGarageAdd"
            v-if="!showLoader"
          >
            Dodaj warsztat
          </Button>
          <Loader v-else />
        </div>
      </div>
      <div v-else>
        <br />
        <h2>Warsztat został dodany</h2>
        <br />
        <Button :green="true" @click.native.prevent="addNextGarage">
          Dodaj kolejny warsztat
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
import Input from "@/components/Inputs/Input.vue";
import Button from "@/components/Inputs/Button.vue";
import Checkbox from "@/components/Inputs/Checkbox.vue";
import search from "@/mixins/search";
import dictionary from "@/mixins/dictionary";
import helper from "@/mixins/helper";

import { required } from "vuelidate/lib/validators";

import Loader from "@/components/Inputs/Loader.vue";


export default {
  mixins: [search, dictionary, helper],
  components: {
    CustomSelect,
    Input,
    Button,
    Checkbox,
    Loader,
  },

  data() {
    return {
      form: {
        name: "",
        address: "",
        postCode: "",
        hoursWeek: "",
        hoursSaturday: "",
        hoursSunday: "",
        mapURL: "",
        cityId: null,
        selectedServices: [],
      },
      resetForm: {
        name: "",
        address: "",
        postCode: "",
        hoursWeek: "",
        hoursSaturday: "",
        hoursSunday: "",
        mapURL: "",
        cityId: null,
        selectedServices: [],
      },
      filteredCities: [],
      showLoader: false,
      cityError: false,
    };
  },
  validations: {
    form: {
      name: { required },
      address: { required },
      postCode: { required },
      hoursWeek: { required },
      hoursSaturday: { required },
      hoursSunday: { required },
      cityId: { required },
    },
  },
  methods: {
    confirmGarageAdd() {
      this.$v.$touch();
      this.showLoader = true;

      if (this.form.cityId == null) {
        this.cityError = true;
      } else {
        this.cityError = false;
      }

      if (this.$v.form.$pending || this.$v.form.$error || this.cityError) {
        console.log("error");
        this.showLoader = false;
        return;
      } else {
        this.addOwnedGarage(this.form);
      }
    },
    addNextGarage(){
      this.form = this.resetForm
      this.showLoader = false
      this.garageAdded(false)
    }
  },
  watch: {
    "form.cityId": {
      handler() {
        if (this.form.cityId != null) {
          this.cityError = false;
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.fetchCities();
  },
};
</script>
  <style lang="scss">
.addGarage {
  &__top {
    margin: 30px 0;
  }
  &__form {
    margin-top: 15px;
    &-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &-label {
      font-size: 14px;
      margin-bottom: 10px;
    }
    &-service {
      span {
        font-size: 14px;
      }
    }
    &-item {
      width: calc(100% / 4 - 1rem);

      @media (max-width: 960px) {
        width: calc(100% / 2 - 1rem);
      }
      @media (max-width: 600px) {
        width: calc(100% / 1 - 1rem);
      }
    }
    &-error {
      color: $redError;
      font-size: 0.6rem;
      margin: 0;
    }
  }
}
</style>
