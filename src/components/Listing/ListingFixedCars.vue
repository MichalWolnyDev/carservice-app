<template>
  <div>
    <div class="listingItemFixedCars shadow">
      <p class="listingItemFixedCars__title">
        {{ booking.car.model.make.name }} {{ booking.car.model.name }}
      </p>

      <div class="listingItemFixedCars__wrap">
        <div class="listingItemFixedCars__col">
          <p class="listingItemFixedCars__text">{{ booking.garage.name }}</p>
          <p class="listingItemFixedCars__text">
            {{ booking.garage.city.province }}
          </p>
          <p class="listingItemFixedCars__text">
            {{ booking.garage.address }}, {{ booking.garage.postCode }}
            {{ booking.garage.city.name }}
          </p>
          <p class="listingItemFixedCars__text">
            Godziny otwarcia: <br />
            Pn - Pt: {{ booking.garage.hoursWeek }} <br />
            Sobota: {{ booking.garage.hoursSaturday }} <br />
            Niedziela: {{ booking.garage.horusSunday }}
          </p>
          <br />
          <p class="listingItemFixedCars__text">
            Data wizyty: {{ dateFormat(booking.date) }}
          </p>
          <br />
          <Button :arrow="true" :green="true" @click.native="show = !show">
            <span> SPRAWDŹ STATUS NAPRAWY </span>
            <img :src="arrow_down" alt="SPRAWDŹ STATUS NAPRAWY" />
          </Button>

          <div class="status">
            <div class="status__container" v-if="show">
              <!-- <div class="status__message">
             <p class="status__message-text text__center"> 
                Brak informacji o zarezerwowanej wizycie
            </p>
        </div> -->
              <div class="steps">
                <div
                  class="steps__item"
                  :class="{
                    active: bookingStatus.status == 'WAITING_FOR_ACCEPT',
                  }"
                >
                  <div class="steps__item-row">
                    <div
                      class="steps__number"
                      :class="{
                        active: bookingStatus.status == 'WAITING_FOR_ACCEPT',
                      }"
                    >
                      <p class="steps__number-text">1</p>
                    </div>
                    <div class="steps__message">
                      <p
                        class="steps__message-text"
                        :class="{
                          active: bookingStatus.status == 'WAITING_FOR_ACCEPT',
                        }"
                      >
                        Rezerwacja oczekuje na przyjęcie przez warsztat
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="steps__item"
                  :class="{ active: bookingStatus.status == 'ACCEPTED' }"
                >
                  <div class="steps__item-row">
                    <div
                      class="steps__number"
                      :class="{ active: bookingStatus.status == 'ACCEPTED' }"
                    >
                      <p class="steps__number-text">2</p>
                    </div>
                    <div class="steps__message">
                      <p
                        class="steps__message-text"
                        :class="{ active: bookingStatus.status == 'ACCEPTED' }"
                      >
                        Samochód przyjęty do warsztatu
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="steps__item"
                  :class="{ active: bookingStatus.status == 'REPAIRING' }"
                >
                  <div class="steps__item-row">
                    <div
                      class="steps__number"
                      :class="{ active: bookingStatus.status == 'REPAIRING' }"
                    >
                      <p class="steps__number-text">3</p>
                    </div>
                    <div class="steps__message">
                      <p
                        class="steps__message-text"
                        :class="{ active: bookingStatus.status == 'REPAIRING' }"
                      >
                        Trwa naprawa Twojego samochodu
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="steps__item"
                  :class="{
                    active: bookingStatus.status == 'WAITING_FOR_PICKUP',
                  }"
                >
                  <div class="steps__item-row">
                    <div
                      class="steps__number"
                      :class="{
                        active: bookingStatus.status == 'WAITING_FOR_PICKUP',
                      }"
                    >
                      <p class="steps__number-text">4</p>
                    </div>
                    <div class="steps__message">
                      <p
                        class="steps__message-text"
                        :class="{
                          active: bookingStatus.status == 'WAITING_FOR_PICKUP',
                        }"
                      >
                        Auto czeka na odbiór
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="steps__item"
                  :class="{ active: bookingStatus.status == 'COMPLETED' }"
                >
                  <div class="steps__item-row">
                    <div
                      class="steps__number"
                      :class="{ active: bookingStatus.status == 'COMPLETED' }"
                    >
                      <p class="steps__number-text">5</p>
                    </div>
                    <div class="steps__message">
                      <p
                        class="steps__message-text"
                        :class="{ active: bookingStatus.status == 'COMPLETED' }"
                      >
                        Auto odebrane przez klienta
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="steps__item"
                  v-if="bookingStatus.status == 'CANCELED'"
                  :class="{ canceled: bookingStatus.status == 'CANCELED' }"
                >
                  <div class="steps__item-row">
                    <div
                      class="steps__number"
                      :class="{ canceled: bookingStatus.status == 'CANCELED' }"
                    >
                      <p class="steps__number-text">X</p>
                    </div>
                    <div class="steps__message">
                      <p
                        class="steps__message-text"
                        :class="{ canceled: bookingStatus.status == 'CANCELED' }"
                      >
                        Twoje zlecenie zostało odrzucone
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import arrow_down from "/src/assets/arrow_down.svg";
import Button from "@/components/Inputs/Button.vue";
import helper from "@/mixins/helper";
export default {
  props: ["booking"],
  mixins: [helper],
  components: {
    Button,
  },
  data() {
    return {
      arrow_down,
      show: false,
    };
  },
};
</script>
<style lang="scss">
.listingItemFixedCars {
  padding: 20px;
  margin: 20px 0;

  &.shadow {
    -webkit-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 1);
  }

  &__title {
    font-weight: 700;
    font-size: 1.3em;
    padding-bottom: 15px;
  }

  &__wrap {
    display: flex;

    @media (max-width: 960px) {
      display: block;
    }
  }

  &__col {
    flex: 1;
  }
  &__button {
    cursor: pointer;
    font-style: italic;
  }
}
.status {
  &__message {
    margin: 30px 0;

    &-text {
      font-size: 20px;
    }
  }
}
.steps {
  margin: 50px 0;

  &__item {
    position: relative;
    padding-bottom: 40px;

    &-row {
      display: flex;
      align-items: center;
    }

    &::after {
      content: "";
      background-color: $gray;
      width: 2px;
      height: 40px;
      position: absolute;
      left: 23px;
      z-index: -1;
      top: 50px;
    }

    &.active {
      &::after {
        background-color: $green;
      }
    }
    &.canceled {
      &::after {
        background-color: $redError;
      }
    }

    &:last-of-type {
      &::after {
        display: none;
      }
    }

    @media (max-width: 320px) {
      padding-bottom: 20px;
    }
  }

  &__number {
    width: 50px;
    height: 50px;
    background-color: $gray;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-right: 20px;

    &.active {
      background-color: $green;
      box-shadow: 0 0 0 0 rgba(49, 209, 44, 1);
      transform: scale(1.2);
      animation: pulse 2s infinite;
    }
    &.canceled {
      background-color: $redError;
      box-shadow: 0 0 0 0 rgb(255, 0, 0);
      transform: scale(1.2);
      animation: pulseRed 2s infinite;
    }

    &-text {
      font-size: 24px;
    }
  }

  &__message {
    flex: 2;
    &-text {
      font-weight: 700;
      color: $gray;

      &.active {
        color: $green;
      }
      &.canceled {
        color: $redError;
      }
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(49, 209, 44, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(49, 209, 44, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(49, 209, 44, 0);
  }
}
@keyframes pulseRed {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, .7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(49, 209, 44, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(49, 209, 44, 0);
  }
}
</style>