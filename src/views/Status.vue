<template>
  <div>
    <h2 class="title title__h2 text__center">Status naprawy</h2>

    <ListingFixedCars v-for="booking in getUserBookings" :key="booking.id" :booking="booking"/>
  </div>
</template>
<script>
import ListingFixedCars from "@/components/Listing/ListingFixedCars.vue";

import search from "@/mixins/search";

export default {
  mixins: [search],
  components: {
    ListingFixedCars,
  },
   mounted(){
    this.fetchUserBookings()
  }
};
</script>
<style lang="scss">
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
</style>
