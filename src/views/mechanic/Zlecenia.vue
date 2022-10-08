<template>
  <div>
    <h2 class="title title__h2 text__center">
      Zlecenia
    </h2>
    <div class="serviceBookings">
      <div>
        <CustomSelect
          :options="getOwnedGarages"
          :default="'wybierz'"
          class="select"
          @input="formData.garageId = $event.id"
        >
          <template> Warsztat </template>
        </CustomSelect>
      </div>
    </div>
    <div v-if="getServiceBookings.length > 0">
      <ListingBookingService v-for="(booking, id) in getServiceBookings" :key="id" :booking="booking"/>
    </div>
    <div v-else>
      Brak zleceń w wybranym warsztacie
    </div>
  </div>
</template>
<script>
import search from "@/mixins/search";
import CustomSelect from "@/components/Inputs/CustomSelect.vue";
import ListingBookingService from "@/components/Listing/ListingBookingService.vue";
export default {
    name: 'Zlecenia',
    mixins: [search],
    components: {
      CustomSelect,
      ListingBookingService
    },
    data(){
      return {
        formData: {
          garageId: null
        }
      }
    },
    mounted() {
         this.fetchOwnedGarages();
    },
    watch: {
    'formData.garageId': {
      handler(){
        this.fetchServiceBookings(this.formData.garageId)
      },
      deep: true
    }
  }

}
</script>
<style lang="scss">

</style>