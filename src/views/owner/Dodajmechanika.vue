<template>
  <div>
    <h2 class="title title__h2 text__center">
      Dodaj mechaników (dla właściciela)
    </h2>
    <div class="addMechanic">
      <div class="addMechanic__form">
        <div class="addMechanic__form-wrap">
          <div class="addMechanic__form-item">
            <Input
              type="text"
              v-model.trim="$v.formData.email.$model"
              :error="$v.formData.email.$error"
            >
              <template> Adres e-Mail </template>
            </Input>
            <p class="addMechanic__form-error" v-if="$v.formData.email.$error">
              To pole jest wymagane
            </p>
            <CustomSelect
            :options="getOwnedGarages"
            :default="'wybierz'"
            class="select"
            @input="
              fetchModels($event.name);
              form.brand = $event.name;
            "
          >
            <template> Warsztat </template>
          </CustomSelect>
          </div>
          <div class="addMechanic__top">
            <Button
              :green="true"
              @click.native.prevent="confirmMechanicAdd"
              v-if="!showLoader"
            >
              Dodaj mechanika
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Input from "@/components/Inputs/Input.vue";
import Button from "@/components/Inputs/Button.vue";
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
import { required, email } from "vuelidate/lib/validators";
import search from "@/mixins/search"

export default {
  components: {
    Input,
    Button,
    CustomSelect,
  },
  name: 'Warsztat',
  mixins: [search],
  mounted() {
    this.fetchOwnedGarages()
  },
  
  data() {
    return {
      formData: {
        email: "",
      },
      resetFormData: {
        email: "",
      },
      filteredCities: [],
      showLoader: false,
    };
  },
  validations: {
    formData: {
      email: { required, email },
    },
  },
  methods: {
    confirmMechanicAdd() {
      this.$v.$touch();
      this.showLoader = true;

      if (this.$v.formData.$pending || this.$v.formData.$error) {
        console.log("error");
        this.showLoader = false;
        return;
      } else {
        console.log("nie ma błędu");
      }
    },
    async addMechanicRole() {
      const BASE_URL = process.env.VUE_APP_BASEURL;
      let token = localStorage.getItem("token")

      await this.$axios
        .post(
          BASE_URL + "/mechanic",
          {
            mechanicEmail: this.formData.email
          },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
.addMechanic {
  &__top {
    margin: 30px 0;
  }
  &__form {
    margin-top: 15px;
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
  