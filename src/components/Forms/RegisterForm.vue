<template>
  <div class="registerform">
    <div class="registerform__wrap">
      <h1 class="registerform__title">Zarejestruj się!</h1>
      <p class="registerform__subtitle">To szybkie i proste.</p>
      <div class="registerform__input">
        <Input type="text">
          <template> Imię </template>
        </Input>
      </div>
      <div class="registerform__input">
        <Input type="text">
          <template> Nazwisko </template>
        </Input>
      </div>
      <div class="registerform__input">
        <Input type="text">
          <template> E-mail </template>
        </Input>
      </div>
      <div class="registerform__input">
        <Input type="password">
          <template> Hasło </template>
        </Input>
      </div>
      <div class="registerform__input">
        <Input type="password">
          <template> Powtórz hasło </template>
        </Input>
      </div>
      <div class="registerform__button">
        <Button :blue="true" :big="true"> Zarejestruj </Button>
      </div>
     <p class="registerform__annotation">
        <span @click="$emit('changeSignForm','login')">Wróć do logowania</span>
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

   @media(max-width: 600px){
    min-width: 100%;
  }
}
</style>