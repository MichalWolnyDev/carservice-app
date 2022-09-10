<template>
  <div>
    <h2 class="title title__h2 text__center">Moje pojazdy</h2>
    <div class="cars">
      <div class="cars__top">
        <Button :green="true" @click.native.prevent="showModal = true"> Dodaj samochód </Button>
      </div>
      <ListingCars v-for="car in getUserCars" :key="car.id" :car="car" />
    </div>
    <Modal
      v-if="showModal"
      @closeModal="showModal = false"
      title="Formularz dodania samochodu"
    >
    <CarForm @closeModal="showModal = false"/>
    </Modal>
  </div>
</template>
<script>
import ListingCars from "@/components/Listing/ListingCars.vue";
import CarForm from "@/components/Forms/CarForm.vue";
import Button from "@/components/Inputs/Button.vue";
import Modal from "@/components/Modal";

import search from "@/mixins/search";

export default {
  mixins: [search],
  components: {
    ListingCars,
    Button,
    Modal,
    CarForm
  },
  data() {
    return {
      showModal: false
    }
  },
  mounted(){
    this.fetchUserCars()
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