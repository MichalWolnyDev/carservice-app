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
  </div>
</template>
<script>
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
import Button from "@/components/Inputs/Button.vue";
import Checkbox from "@/components/Inputs/Checkbox.vue";
export default {
  components: {
    CustomSelect,
    Button,
    Checkbox,
  },
  data() {
    return {
      searchData: {
        localization: "",
      },
      cities: ["Warszawa", "Poznań", "Kraków", "Wrocław"],
      services: [
        {
          label: "Wymiana oleju i filtra oleju",
          val: "Wymiana oleju i filtra oleju"
        },
        {
          label: "Wymiana akumulatora",
          val: "Wymiana akumulatora"
        },
        {
          label: "Wymiana opon i wulkanizacja",
          val: "Wymiana opon i wulkanizacja"
        },
        {
          label: "Wymiana klocków hamulcowych",
          val: "Wymiana klocków hamulcowych"
        },
        {
          label: "Diagnostyka komputerowa",
          val: "Diagnostyka komputerowa"
        },
        {
          label: "Serwis klimatyzacji",
          val: "Serwis klimatyzacji"
        },
        {
          label: "Sprawdzenie samochodu przed zakupem",
          val: "Sprawdzenie samochodu przed zakupem"
        },
        {
          label: "Poprawki lakiernicze",
          val: "Poprawki lakiernicze"
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

    @media (max-width: 320px) {
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
  &__wrap{
    margin: 0 20px;
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    width: calc(100%/3);
  }
  &__title {
    margin: 0 20px;
    padding-bottom: 15px;

  }
}
</style>
