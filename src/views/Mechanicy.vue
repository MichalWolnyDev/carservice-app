<template>
  <div>
    <h2 class="title title__h2 text__center">Mechanicy (dla właściciela)</h2>
     <div><ListingMechanics/></div>
  </div>
    
</template>
<script>
  import ListingMechanics from "@/components/Listing/ListingMechanics.vue";

  
  export default {
    components: {
      ListingMechanics,
    },
  };
  </script>