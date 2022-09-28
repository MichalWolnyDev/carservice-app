<template>
  <div>
    <h2 class="title title__h2 text__center">Mechanicy (dla właściciela)</h2>
    <div><ListingMechanics /></div>
    {{ getEmployees }}
  </div>
</template>
<script>
import ListingMechanics from "@/components/Listing/ListingMechanics.vue";
import search from "@/mixins/search";

export default {
  components: {
    ListingMechanics,
  },
  mixins: [search],
  mounted() {
    this.fetchEmployees();
  },
};
</script>