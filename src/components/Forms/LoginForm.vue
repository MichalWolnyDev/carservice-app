<template>
  <div class="loginform">
    <div class="loginform__wrap">
      <h1 class="loginform__title">Witaj!</h1>
      <p class="loginform__subtitle">Zaloguj się do swojego konta.</p>
      <div class="loginform__input">
        <Input type="text" v-model="formData.email">
          <template> E-mail </template>
        </Input>
      </div>
      <div class="loginform__input">
        <Input type="password" v-model="formData.password">
          <template> Hasło </template>
        </Input>
      </div>
      <div class="loginform__button">
        <Button :blue="true" :big="true"> Zaloguj </Button>
      </div>
      <p class="loginform__annotation">
        Nie masz konta? <span @click="$emit('changeSignForm','register')">Zarejestruj się!</span>
      </p>
    </div>
  </div>
</template>
<script>
import Input from "@/components/Inputs/Input.vue";
import Button from "@/components/Inputs/Button.vue";
export default {
  components: {
    Input,
    Button,
  },
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  }
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

  @media(max-width: 600px){
    min-width: 100%;
  }
}
</style>