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
      </div>
    </div>
  </div>
</template>
<script>
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
export default {
  components: {
    CustomSelect,
  },
  data() {
    return {
      searchData: {
        localization: "",
      },
      cities: ["Warszawa", "Poznań", "Kraków", "Wrocław"],
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

    @media(max-width: 320px){
      margin: 20px 0;
    }
  }
}
</style>
