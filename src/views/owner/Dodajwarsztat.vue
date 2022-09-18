<template>
  <div>
    <h2 class="title title__h2 text__center">
      Dodaj warsztat
    </h2>
    <div class="addGarage">
      {{getGarageAdded}}
      <div class="addGarage__form">
        <div class="addGarage__form-wrap">
          <div class="addGarage__form-item">
            <Input v-model="form.name">
              <template> Nazwa warsztatu </template>
            </Input>
          </div>
          <div class="addGarage__form-item">
            <CustomSelect
              v-if="getCities.content"
              :textMode="true"
              :options="
                filteredCities.length == 0 ? getCities.content : filteredCities
              "
              :default="'Wybierz miasto'"
              class="select"
              @input="form.cityId = $event.id"
              @typetext="filterGarages($event)"
            >
              <template> Miasto </template>
            </CustomSelect>
          </div>
          <div class="addGarage__form-item">
            <Input v-model="form.address">
              <template> Adres </template>
            </Input>
          </div>
          <div class="addGarage__form-item">
            <Input v-model="form.postCode">
              <template> Kod pocztowy </template>
            </Input>
          </div>
          <div class="addGarage__form-item">
            <Input v-model="form.hoursWeek">
              <template> Godziny pracy w tygodniu </template>
            </Input>
          </div>
          <div class="addGarage__form-item">
            <Input v-model="form.hoursSaturday">
              <template> Godziny pracy w sobotę </template>
            </Input>
          </div>
          <div class="addGarage__form-item">
            <Input v-model="form.hoursSunday">
              <template> Godziny pracy w niedziele </template>
            </Input>
          </div>
          <div class="addGarage__form-item">
            <Input v-model="form.mapURL">
              <template> Link do mapy Google </template>
            </Input>
          </div>
          <!-- <div class="addGarage__form-item">
            <CustomSelect
              :options="getServices"
              :default="'wybierz'"
              class="select"
              @input="form.engine = $event.name"
            >
              <template> Jednostka napędowa </template>
            </CustomSelect>
          </div> -->
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
        <Button :green="true" @click.native.prevent="confirmGarageAdd">
          Dodaj warsztat
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

export default {
  mixins: [search, dictionary, helper],
  components: {
    CustomSelect,
    Input,
    Button,
    Checkbox,
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
      filteredCities: [],
    };
  },
  methods: {
    confirmGarageAdd() {
      this.addOwnedGarage(this.form);
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
  }
}
</style>
