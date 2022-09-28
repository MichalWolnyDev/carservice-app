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
              :isError="$v.formData.garageId.$error"
              @input="formData.garageId = $event.id"
            >
              <template> Warsztat </template>
            </CustomSelect>
            <p
              class="addMechanic__form-error"
              v-if="$v.formData.garageId.$error"
            >
              To pole jest wymagane
            </p>
          </div>
            <div class="addMechanic__error" v-if="isAxiosError">
            <h3>
              {{ errorMsg }}
            </h3>
          </div>
          <div class="addMechanic__top" v-if="!success">
            <Button
              :green="true"
              @click.native.prevent="confirmMechanicAdd"
              v-if="!showLoader"

            >
              Dodaj mechanika
            </Button>
            <Loader v-else />

          </div>
          <!-- <div class="addMechanic__top" v-else>
            <Button :green="true" @click.native.prevent="resetForm">
              Dodaj kolejnego mechanika
            </Button>
          </div> -->
          <div class="addMechanic__success" v-if="success">
            <h3>Mechanik został poprawnie dodany</h3>
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
import Loader from "@/components/Loader.vue";
import { required, email } from "vuelidate/lib/validators";
import search from "@/mixins/search";

export default {
  components: {
    Input,
    Button,
    CustomSelect,
    Loader
  },
  name: "Warsztat",
  mixins: [search],
  mounted() {
    this.fetchOwnedGarages();
  },

  data() {
    return {
      formData: {
        email: "",
        garageId: null,
      },
      resetFormData: {
        email: "",
        garageId: null,
      },
      filteredCities: [],
      showLoader: false,
      success: false,
      isAxiosError: false,
      errorMsg: "",
    };
  },
  validations: {
    formData: {
      email: { required, email },
      garageId: { required },
    },
  },
  methods: {
    resetForm() {
      this.$v.formData.$reset;
      this.formData = this.resetFormData;
      this.success = false;
    },
    confirmMechanicAdd() {
      this.$v.$touch();
      this.showLoader = true;

      if (this.$v.formData.$pending || this.$v.formData.$error) {
        console.log("error");
        this.showLoader = false;
        return;
      } else {
        console.log("nie ma błędu walidacji");
        this.addMechanicRole();
      }
    },
    async addMechanicRole() {
      const BASE_URL = process.env.VUE_APP_BASEURL;
      let token = localStorage.getItem("token");

      await this.$axios
        .post(
          BASE_URL + "/mechanic",
          {
            mechanicEmail: this.formData.email,
            garageId: this.formData.garageId,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.isAxiosError = false;
            this.success = true;
            this.showLoader = false;
          }
        })
        .catch((err) => {
          console.log(err);
          this.isAxiosError = true;
          this.errorMsg = err.response.data;
          this.showLoader = false;
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

  &__success {
    h3 {
      color: $green;
    }
  }
  &__error {
    h3 {
      color: $redError;
    }
  }
}
</style>
  