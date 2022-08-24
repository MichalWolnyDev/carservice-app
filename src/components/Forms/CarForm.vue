<template>
  <div>
    <div v-if="!carAdded">
      <div class="carform" >
      <div class="carform__wrap">
        <div class="carform__item">
          <CustomSelect
            :options="getBrands"
            :default="'wybierz'"
            class="select"
            @input="
              fetchModels($event.name);
              form.brand = $event.name;
            "
          >
            <template> Marka </template>
          </CustomSelect>
        </div>
        <div class="carform__item">
          <CustomSelect
            :options="getModels"
            :default="'wybierz'"
            class="select"
            @input="form.model = $event.id"
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
          <CustomSelect
            :options="getEngine"
            :default="'wybierz'"
            class="select"
            @input="form.engine = $event.name"
          >
            <template> Jednostka napędowa </template>
          </CustomSelect>
        </div>
        <!-- <div class="carform__item">
          <Input v-model="form.power">
            <template> Moc (KM) </template>
          </Input>
        </div> -->
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
      <Button :green="true" @click.native="addCar"> Dodaj </Button>
      <!-- <Button :green="true" @click.native="$emit('closeModal', true)">
              Dodaj
            </Button> -->
    </div>
    </div>
    <div v-else>
      <div class="carform__success">
        <h3>
          Samochód został dodany poprawnie!
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
import Input from "@/components/Inputs/Input.vue";
import Button from "@/components/Inputs/Button.vue";

import dictionary from "@/mixins/dictionary";
import search from "@/mixins/search";

export default {
  name: "CarForm",
  mixins: [dictionary, search],
  components: {
    CustomSelect,
    Input,
    Button,
  },
  data() {
    return {
      form: {
        brand: "",
        model: null,
        registerNumber: "",
        engine: "",
        // power: "",
        gearbox: "",
        prodYear: null,
        body: "",
      },
      carAdded: false
    };
  },
  methods: {
    async addCar() {
      const BASE_URL = process.env.VUE_APP_BASEURL;
      let token = localStorage.getItem("token")

      await this.$axios
        .post(
          BASE_URL + "/cars",
          {
            modelId: this.form.model,
            registrationNumber: this.form.registerNumber,
            year: Number(this.form.prodYear),
            engine: this.form.engine,
            gearbox: this.form.gearbox,
            bodyType: this.form.body,
          },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        .then((res) => {
          console.log(res);
          if(res.status == 200) {
            this.carAdded = true
            this.fetchUserCars();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.fetchBrands();
  },
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
    padding: 0 0.5rem;

    @media (max-width: 960px) {
      width: calc(100% / 3);
    }
    @media (max-width: 768px) {
      width: calc(100% / 2);
    }
    @media (max-width: 575px) {
      width: 100%;
    }
  }

  &__submit {
    margin: 30px 0;
    text-align: center;
    min-height: 100px;
  }

  .select__items {
    max-height: 150px;
  }

  &__success {
    text-align: center;

    h3 {
      font-size: 1.5rem;
      color: $green;
    }
  }
}
</style>