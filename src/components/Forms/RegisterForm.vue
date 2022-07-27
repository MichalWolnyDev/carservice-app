<template>
  <div class="registerform">
    <div class="registerform__wrap">
      <h1 class="registerform__title">Zarejestruj się!</h1>
      <p class="registerform__subtitle">To szybkie i proste.</p>
      <div class="registerform__input">
        <Input
          type="text"
          v-model.trim="$v.formData.firstName.$model"
          :error="$v.formData.firstName.$error"
        >
          <template> Imię </template>
        </Input>
        <p class="loginform__input-error" v-if="$v.formData.firstName.$error">
          To pole jest wymagane
        </p>
      </div>
      <div class="registerform__input">
        <Input
          type="text"
          v-model.trim="$v.formData.surname.$model"
          :error="$v.formData.surname.$error"
        >
          <template> Nazwisko </template>
        </Input>
        <p class="loginform__input-error" v-if="$v.formData.surname.$error">
          To pole jest wymagane
        </p>
      </div>
      <div class="registerform__input">
        <Input
          type="text"
          v-model.trim="$v.formData.email.$model"
          :error="$v.formData.email.$error"
        >
          <template> E-mail </template>
        </Input>
        <p class="loginform__input-error" v-if="$v.formData.email.$error">
          Niepoprawny adres e-mail
        </p>
      </div>
      <div class="registerform__input">
        <Input type="text" v-model="formData.phoneNumber">
          <template> Numer telefonu (niewymagany) </template>
        </Input>
      </div>
      <div class="registerform__input">
        <Input
          type="password"
          v-model.trim="$v.formData.password.$model"
          :error="$v.formData.password.$error"
        >
          <template> Hasło </template>
        </Input>
        <p class="loginform__input-error" v-if="$v.formData.password.$error">
          Hasło musi mieć min. 8 znaków
        </p>
      </div>
      <div class="registerform__input">
        <Input
          type="password"
          v-model.trim="$v.formData.confirmPassword.$model"
          :error="$v.formData.confirmPassword.$error"
        >
          <template> Powtórz hasło </template>
        </Input>
        <p
          class="loginform__input-error"
          v-if="!$v.formData.confirmPassword.sameAsPassword"
        >
          Hasła muszą być identyczne
        </p>
      </div>
      <div class="registerform__button">
        <Button :blue="true" :big="true" @click.native.prevent="submitRegister">
          Zarejestruj
        </Button>
      </div>
      <p class="registerform__annotation">
        <span @click="$emit('changeSignForm', 'login')">Wróć do logowania</span>
      </p>
    </div>
  </div>
</template>
<script>
import Input from "@/components/Inputs/Input.vue";
import Button from "@/components/Inputs/Button.vue";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import search from "@/mixins/search";

export default {
  mixins: [search],
  components: {
    Input,
    Button,
  },
  data() {
    return {
      formData: {
        firstName: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
      },
    };
  },
  validations: {
    formData: {
      firstName: { required },
      surname: { required },
      password: { required, minLength: minLength(8) },
      email: { required, email },
      confirmPassword: {
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    async submitRegister() {
      var _this = this;
      this.$v.$touch();
      // if its still pending or an error is returned do not submit
      if (this.$v.formData.$pending || this.$v.formData.$error) {
        return;
      } else {
        // const data = new FormData();
        // data.append("firstName", this.formData.firstName);
        // data.append("lastName", this.formData.surname);
        // data.append("email", this.formData.email);
        // data.append("password", this.formData.password);
        // data.append("phone", this.formData.phoneNumber);
        // data.append("role", "USER");

        
        this.userRegister(this.formData);

        setTimeout(function(){
        _this.$emit('goToLoginForm', true)

        }, 1500)

      }
    },
  },
};
</script>
<style lang="scss">
.registerform {
  box-shadow: 0px 0px 20px -10px black;
  padding: 2rem;
  min-width: 70%;

  &__subtitle {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  &__button {
    margin: 20px 0;
  }
  &__annotation {
    font-size: 0.7rem;
    margin: 15px 0;
    span {
      font-weight: 600;
      color: $darkBlue;
      cursor: pointer;
    }
  }
  &__input {
    &-error {
      color: $redError;
      font-size: 0.6rem;
      margin: 0;
    }
  }

  @media (max-width: 600px) {
    min-width: 100%;
  }
}
</style>