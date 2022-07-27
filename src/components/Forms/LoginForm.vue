<template>
  <div class="loginform">
    <div class="loginform__wrap">
      <h1 class="loginform__title">Witaj!</h1>
      <p class="loginform__subtitle">Zaloguj się do swojego konta.</p>
      <form>
        <!-- <div class="" v-if="$v.formData.$error">
          Uzupełnij wszystkie pola!
        </div> -->
        <div class="loginform__input">
          <Input type="text" v-model.trim="$v.formData.email.$model" :error="$v.formData.email.$error">
            <template> E-mail </template>
          </Input>
          <p class="loginform__input-error" v-if="$v.formData.email.$error">
            Niepoprawny adres e-mail
          </p>
        </div>
        <div class="loginform__input">
          <Input type="password" v-model.trim="$v.formData.password.$model" :error="$v.formData.password.$error">
            <template> Hasło </template>
          </Input>
          <p class="loginform__input-error" v-if="$v.formData.email.$error">
            Hasło musi mieć min. 8 znaków
          </p>
        </div>
        <div class="loginform__button">
          <Button :blue="true" :big="true" @click.native.prevent="submitLogin">
            Zaloguj
          </Button>
        </div>
        <p class="loginform__annotation">
          Nie masz konta?
          <span @click="$emit('changeSignForm', 'register')"
            >Zarejestruj się!</span
          >
        </p>
      </form>
    </div>
  </div>
</template>
<script>
import Input from "@/components/Inputs/Input.vue";
import Button from "@/components/Inputs/Button.vue";
import { required, email, minLength } from "vuelidate/lib/validators";

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
        email: "",
        password: "",
      },
    };
  },
  validations: {
    formData: {
      password: { required, minLength: minLength(8) },
      email: { required, email },
    },
  },
  methods: {
    async submitLogin() {

      this.$v.$touch();
      // if its still pending or an error is returned do not submit
      if (this.$v.formData.$pending || this.$v.formData.$error) {
        return;
      } else {
       this.userLogin(this.formData);
      }
    },
  },
};
</script>
<style lang="scss">
.loginform {
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
      font-size: .6rem;
      margin: 0;
    }
  }

  @media (max-width: 600px) {
    min-width: 100%;
  }
}
</style>