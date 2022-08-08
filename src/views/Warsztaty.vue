<template>
  <div class="">
    <div class="search">
      <h2 class="title title__h2 text__center">Wyszukaj warsztat</h2>

      <div class="search__inputs">
        <div class="search__row">
          <div class="search__item">
            <CustomSelect
              v-if="getCities.content"
              :textMode="true"
              :options="
                filteredCities.length == 0 ? getCities.content : filteredCities
              "
              :default="'Wybierz miasto'"
              class="select"
              @input="
                chooseOption($event);
                setParam({
                  key: 'cityId',
                  value: $event.id,
                });
              "
              @typetext="filterGarages($event)"
            />
          </div>
        </div>
        <div class="">
          <div class="services">
            <h3 class="services__title">Zakres usług</h3>
            <div class="services__wrap">
              <Checkbox
                v-for="service in getServices"
                :label="service.label"
                :inputVal="service.id"
                :key="service.id"
                class="services__item"
                v-model="selectedServices"
                @change="setParam({})"
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
        <Button
          @click.native.prevent="
            fetchGarages();
            activateLoader();
          "
        >
          Wyszukaj
        </Button>
      </div>
    </div>
    <div>
      <div class="listing" v-if="getGarages.content && showLoader == false">
        <div class="" v-for="(garage, id) in getGarages.content" :key="id">
          <ListingItem :garage="garage" @openModal="showModal = true" />
        </div>
      </div>
      <div v-if="getGarages.content && getGarages.content.length == 0">
        <p class="search__response">Brak warsztatów o podanych kryteriach</p>
      </div>
      <div v-if="showLoader">
        <Loader />
      </div>
    </div>
    <Modal
      v-if="showModal"
      @closeModal="showModal = false"
      title="Rezerwacja wizyty"
    >
      <ReservationForm @openModal="showModal = false" />
    </Modal>
  </div>
</template>
<script>
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
import Button from "@/components/Inputs/Button.vue";
import Checkbox from "@/components/Inputs/Checkbox.vue";
import ListingItem from "@/components/Listing/ListingItem.vue";
import ReservationForm from "@/components/Forms/ReservationForm.vue";
import Loader from "@/components/Loader.vue";
import Modal from "@/components/Modal";

import search from "@/mixins/search";
import dictionary from "@/mixins/dictionary";

export default {
  mixins: [search, dictionary],
  components: {
    CustomSelect,
    Button,
    Checkbox,
    ListingItem,
    Loader,
    Modal,
    ReservationForm,
  },
  data() {
    return {
      showListing: true,
      showLoader: false,
      showModal: false,
      searchData: {
        localization: "",
      },

      selectedServices: [],
      filteredCities: [],
    };
  },
  watch: {
    selectedServices: {
      handler() {
        this.setParam({
          key: "serviceId",
          value: this.selectedServices,
        });
      },
      deep: true,
    },
  },
  computed: {},
  methods: {
    filterGarages(text) {
      text = text.toLowerCase();
      this.filteredCities = this.getCities.content.filter((e) =>
        e.name.toLowerCase().includes(text)
      );
    },
    chooseOption(e) {
      console.log(e);
      this.searchData.localization = e;
    },
    activateLoader() {
      var _this = this;

      this.showLoader = true;

      setTimeout(() => {
        _this.showLoader = false;
      }, 1000);
    },
  },
  mounted() {
    // this.resetParams();
    this.fetchCities();
    // this.fetchGarages();
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

  &__response {
    text-align: center;
    padding: 20px 0;
    font-size: 1.4rem;
    font-weight: 700;
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
