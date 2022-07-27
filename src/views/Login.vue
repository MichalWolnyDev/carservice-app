<template>
  <div class="login">
    <Container mode="row">
      <Columns mode="equal">
        <div class="login__col">
          <div class="login__content">
            <LoginForm @changeSignForm="showForm = $event" v-if="showForm == 'login'"/>
            <RegisterForm @changeSignForm="showForm = $event" @goToLoginForm="changeForm" v-if="showForm == 'register'"/>
            
          </div>
        </div>
      </Columns>
      <Columns mode="equal">
        <div class="login__col login__col--bg">
          <div class="login__content text-white">
            <div class="login__slider">
              <carousel :perPage="1" :autoplay="true" :loop="true" :autoplayTimeout="4000">
                <slide v-for="(slide, id) in slides" :key="id">
                  <img class="login__slider-img" :src="slide.img" alt="slide">
                  <div class="login__slider-desc">
                    <h2>
                    {{ slide.title }}
                  </h2>
                  <p>
                    {{ slide.description }}
                  </p>
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </Columns>
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container";
import Columns from "@/components/Layout/Columns.vue";
import LoginForm from "@/components/Forms/LoginForm.vue";
import RegisterForm from "@/components/Forms/RegisterForm.vue";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Container,
    Columns,
    Carousel,
    Slide,
    LoginForm,
    RegisterForm
  },
  data() {
    return {
        showForm: 'login',
      slides: [
        {
            name: 'slide1',
            img: require("@/assets/svg/outlander-sylwetka.svg"),
            title: 'Zadbaj o swój samochód',
            description: 'Sprawdź dostępne usługi'
        },
       {
           name: 'slide2',
            img: require("@/assets/svg/mechanic-worker-svgrepo-com.svg"),
            title: 'Zarezerwuj profesjonalny serwis',
            description: 'W oparciu o opinie użytkowników'
        },
        {
             name: 'slide3',
            img: require("@/assets/svg/polskagurom.svg"),
            title: 'Działamy na terenie całej Polski',
            description: 'Już teraz znajdź warsztat w swojej okolicy'
         }
        
      ],
    };
  },
  methods: {
    changeForm(){
      this.showForm = 'login'
    }
  }
};
</script>
<style lang="scss">
.login {
  &__col {
    height: 100%;
    &--bg {
      background-color: $darkBlue;
    }

    @media(max-width: 768px){
        padding: 30px;
    }
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    &.text-white {
      color: $white;
    }
  }
  &__slider {
    width: 450px;
    max-width: 100%;

    &-img {
        width: 100%;
    }
    &-desc{
        text-align: center;
        padding: 20px 0;
    }
  }
  
}
</style>