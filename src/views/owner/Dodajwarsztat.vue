<template>
  <div>
    <h2 class="title title__h2 text__center">Dodaj warsztat (dla właściciela)</h2>
    <div class="cars">
      <div class="cars__top">
        <Button :green="true"> Dodaj warsztat </Button>
      </div>
    </div>
  </div>
</template>
<script>
  import Button from "@/components/Inputs/Button.vue";
 
  export default {
    components: {
      Button
    }
  };
  </script>
  <style lang="scss">
  .cars{
  
    &__top {
      margin: 30px 0;
    }
  }
  </style>
