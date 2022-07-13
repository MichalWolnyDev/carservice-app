<template>
  <div>
    <div class="listingItem shadow">
      <p class="listingItem__title">Warsztat "u Janusza"</p>

      <div class="listingItem__wrap">
        <div class="listingItem__col">
          <p class="listingItem__text">Poznań</p>
          <p class="listingItem__text">ul. Poznańska 1, 60-611 Poznań</p>
          <p class="listingItem__text">
            Godziny otwarcia: <br />
            Pn - Pt: 8:00 - 18:00 <br />
            Sobota: 10:00 - 18:00 <br />
            Niedziela: nieczynne
          </p>
        </div>
        <div class="listingItem__col">
          <p class="listingItem__text">Usługi które oferujemy:</p>
          <ul>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
          </ul>
        </div>
        <div class="listingItem__col">
            <div class="listingItem__cta">
                <Button :big="true" :green="true" @click.native="$emit('openModal', true)"> Zarezerwuj wizytę </Button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Inputs/Button.vue";
export default {
  name: "ListingItem",
  components: {
    Button
  }
};
</script>
<style lang="scss">
.listingItem {
  padding: 20px;
  margin: 20px 0;

  &.shadow {
    -webkit-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 1);
  }

  &__title {
    font-weight: 700;
    font-size: 1.3em;
    padding-bottom: 15px;
  }

  &__wrap {
    display: flex;

    @media(max-width: 960px){
        display: block;
    }
  }

  &__col{
    flex: 1;
  }
}
</style>