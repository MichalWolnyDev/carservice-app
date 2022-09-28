<template>
  <div>
    <h2 class="title title__h2 text__center">Mechanicy (dla właściciela)</h2>
  
    <div class="Mechanics">
      <div> <CustomSelect
              :options="getOwnedGarages"
              :default="'wybierz'"
              class="select"
              @input="formData.garageId = $event.id"
            >
              <template> Warsztat </template>
            </CustomSelect></div>
  </div>
      <ListingMechanics v-for="employee in getEmployees" :key="employee.id" :employee="employee"  />
    </div>
    
   
  
</template>
<script>
import ListingMechanics from "@/components/Listing/ListingMechanics.vue";
import search from "@/mixins/search";
import CustomSelect from "@/components/Inputs/CustomSelect.vue";


export default {
  components: {
    ListingMechanics,
    CustomSelect,
  },
  name: "Warsztat",
  mixins: [search],
  mounted() {
    this.fetchEmployees();
    this.fetchOwnedGarages();
  },
};

</script>
<style lang="scss">
  .Mechanics {
      margin: 15px 0;
  }
  </style>
