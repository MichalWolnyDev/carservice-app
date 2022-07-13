<template>
  <div class="">
    <div class="search">
      <h2 class="title title__h2 text__center">Wyszukaj warsztat</h2>

      <div class="search__inputs">
        <div class="search__row">
          <div class="search__item">
            <CustomSelect
              :options="cities"
              :default="'Wybierz miasto'"
              class="select"
              @input="chooseOption($event)"
            />
          </div>
        </div>
        <div class="">
          <div class="services">
            <h3 class="services__title">Zakres usług</h3>
            <div class="services__wrap">
              <Checkbox
                v-for="(service, index) in services"
                :label="service.label"
                :inputVal="service.val"
                :key="index"
                class="services__item"
                v-model="selectedServices"
              />
            </div>
            <!-- <ul>
              <li v-for="(item, index) in selectedServices" :key="index">
                {{ item }}
              </li>
            </ul> -->
          </div>
        </div>
      </div>
      <div class="search__button">
        <Button> Wyszukaj </Button>
      </div>
    </div>
    <div>
      <div class="listing" v-if="showListing">
        <ListingItem v-for="(service, id) in services" :key="id" @openModal="showModal = true"/>
      </div>
      <div v-if="showLoader">
        <Loader />
      </div>
    </div>
    <Modal v-if="showModal" @closeModal="showModal = false" title="Rezerwacja wizyty">
      
      
    </Modal>
  </div>
</template>
<script>
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
import Button from "@/components/Inputs/Button.vue";
import Checkbox from "@/components/Inputs/Checkbox.vue";
import ListingItem from "@/components/Listing/ListingItem.vue";
import Loader from "@/components/Loader.vue";
import Modal from "@/components/Modal";
export default {
  components: {
    CustomSelect,
    Button,
    Checkbox,
    ListingItem,
    Loader,
    Modal
  },
  data() {
    return {
      showListing: true,
      showLoader: true,
      showModal: false,
      searchData: {
        localization: "",
      },
      cities: ["Warszawa", "Poznań", "Kraków", "Wrocław"],
      services: [
        {
          label: "Wymiana oleju i filtra oleju",
          val: "Wymiana oleju i filtra oleju",
        },
        {
          label: "Wymiana akumulatora",
          val: "Wymiana akumulatora",
        },
        {
          label: "Wymiana opon i wulkanizacja",
          val: "Wymiana opon i wulkanizacja",
        },
        {
          label: "Wymiana klocków hamulcowych",
          val: "Wymiana klocków hamulcowych",
        },
        {
          label: "Diagnostyka komputerowa",
          val: "Diagnostyka komputerowa",
        },
        {
          label: "Serwis klimatyzacji",
          val: "Serwis klimatyzacji",
        },
        {
          label: "Sprawdzenie samochodu przed zakupem",
          val: "Sprawdzenie samochodu przed zakupem",
        },
        {
          label: "Poprawki lakiernicze",
          val: "Poprawki lakiernicze",
        },
      ],
      selectedServices: [],
    };
  },
  methods: {
    chooseOption(e) {
      console.log(e);
      this.searchData.localization = e;
    },
  },
};
</script>
<style lang="scss">
.search {
  border-bottom: 1px solid #05386b;
  padding-bottom: 20px;

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &__item {
    margin: 20px;
    flex: 1;

    @media (max-width: 650px) {
      margin: 20px 0;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    margin: 20px;
  }
}

.services {
  &__wrap {
    margin: 0 20px;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 650px) {
      margin: 0;
    }
  }
  &__item {
    width: calc(100% / 3);

    @media (max-width: 768px) {
      width: calc(100% / 2);
    }
    @media (max-width: 650px) {
      width: 100%;
    }
  }
  &__title {
    margin: 0 20px;
    padding-bottom: 15px;

    @media (max-width: 650px) {
      margin: 0;
    }
  }
}
</style>
