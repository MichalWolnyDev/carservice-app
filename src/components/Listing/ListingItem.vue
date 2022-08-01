<template>
  <div>
    <div class="listingItem shadow">
      <p class="listingItem__title">
        {{ garage.name }}
      </p>
      <div class="listingItem__wrap">
        <div class="listingItem__col">
          
          <p class="listingItem__text">
            {{ garage.address }} {{ garage.postCode }} {{ garage.city.name }}
          </p>
          <p class="listingItem__text">
            Godziny otwarcia: <br />
            Pn - Pt: {{ garage.hoursWeek }} <br />
            Sobota: {{ garage.hoursSaturday }} <br />
            Niedziela: {{ garage.horusSunday }}
          </p>
        </div>
        <div class="listingItem__col" v-if="garage.services.length > 0">
          <p class="listingItem__text">Usługi które oferujemy:</p>
          <ul>
            <li v-for="(item, id) in garage.services" :key="id">
              {{ item.service }}
            </li>
          </ul>
        </div>
        <div class="listingItem__col" v-else></div>
        <div class="listingItem__col">
          <div class="listingItem__cta">
            <Button
              :big="true"
              :green="true"
              @click.native="$emit('openModal', true), chooseGarage(garage)"
            >
              Zarezerwuj wizytę
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Inputs/Button.vue";
import { mapActions } from "vuex";

export default {
  name: "ListingItem",
  props: ["garage"],
  components: {
    Button,
  },
  methods: {
    ...mapActions({
         chooseGarage: 'chooseGarage'
    }),
  },
};
</script>
<style lang="scss">
.listingItem {
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
}
</style>