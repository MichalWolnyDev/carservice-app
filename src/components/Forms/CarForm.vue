<template>
  <div>
    <div class="carform">
      <div class="carform__wrap">
        <div class="carform__item">
            <CustomSelect
              :options="getBrands"
              :default="'wybierz'"
              class="select"
              @input="fetchModels($event.name); form.brand = $event.name"
            >
            <template> Marka </template>
            </CustomSelect>
        </div>
        <div class="carform__item">
          <CustomSelect
              :options="getModels"
              :default="'wybierz'"
              class="select"
              @input="form.model = $event.name"
            >
            <template> Model </template>
            </CustomSelect>
        </div>
        <div class="carform__item">
          <Input v-model="form.registerNumber">
            <template> Numer rejestracyjny </template>
          </Input>
        </div>
        <div class="carform__item">
          <Input v-model="form.engine">
            <template> Jednostka napędowa </template>
          </Input>
        </div>
        <div class="carform__item">
          <Input v-model="form.power">
            <template> Moc (KM) </template>
          </Input>
        </div>
        <div class="carform__item">
          <CustomSelect
              :options="getGearbox"
              :default="'wybierz'"
              class="select"
              @input="form.gearbox = $event.name"
            >
            <template> Skrzynia biegów </template>
            </CustomSelect>
        </div>
        <div class="carform__item">
          <Input v-model="form.prodYear">
            <template> Rok produkcji </template>
          </Input>
        </div>
        <div class="carform__item">
          <CustomSelect
              :options="getBodyType"
              :default="'wybierz'"
              class="select"
              @input="form.body = $event.name"
            >
            <template> Typ nadwozia </template>
            </CustomSelect>
        </div>
      </div>
    </div>
    <div class="carform__submit">
        <Button :green="true" @click.native="$emit('closeModal', true)">
              Dodaj
            </Button>
    </div>
  </div>
</template>
<script>
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
import Input from "@/components/Inputs/Input.vue";
import Button from "@/components/Inputs/Button.vue";

import dictionary from "@/mixins/dictionary"

export default {
  name: "CarForm",
  mixins: [dictionary],
  components: {
    CustomSelect,
    Input,
    Button
  },
  data() {
    return {
        form: {
            brand: "",
            model: "",
            registerNumber: "",
            engine: "",
            power: "",
            gearbox: "",
            prodYear: "",
            body: ""
        }
    };
  },
  mounted() {
    this.fetchBrands();
  }
};
</script>
<style lang="scss">
.carform {
  &__wrap {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    width: calc(100% / 4);
    padding: 0 .5rem;

    @media(max-width: 960px){
        width: calc(100% / 3);
    }
    @media(max-width: 768px){
        width: calc(100% / 2);
    }
    @media(max-width: 575px){
        width: 100%;
    }
  }

  &__submit{
    margin: 30px 0;
    text-align: center;
    min-height: 100px;
  }

  .select__items{
    max-height: 150px;
  }
}
</style>