<template>
  <div class="listingMechanics shadow">
    <p class="listingMechanics__title">
     Karol Wojtyła
    </p>

    <div class="listingMechanics__wrap">
      <div class="listingMechanics__col">
        <table class="listingMechanics__table">
          <tr>
            <th>Imię:</th>
            <td>Karol</td>
          </tr>
          <tr>
            <th>Nazwisko:</th>
            <td>Wojtyła</td>
          </tr>
          <tr>
            <th>Data urodzenia:</th>
            <td>18.05.1920</td>
          </tr>
          <tr>
            <th>Adres:</th>
            <td>Ul. Kremówkowa 12</td>
            <td>21-377 Wadowice</td>
          </tr>
          <tr>
            <th>Numer telefonu:</th>
            <td>213769420 </td>
          </tr>
        </table>
        <br />
        <Button>         
          Usuń mechanika</Button
        >

            
          
       
      </div>
    </div>
  </div>
</template>
<script>
  import Button from "@/components/Inputs/Button.vue";

  export default {
    name: "ListingMechanics",
    components: {
      Button,
    }
  }
  </script>
<style lang="scss">
.listingMechanics {
  padding: 20px;
  margin: 20px 0;
  &__table {
    text-align: left;
  }
  th {
    font-weight: bold;
    padding-right: 10px;
  }

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

    @media (max-width: 960px) {
      display: block;
    }
  }

  &__col {
    flex: 1;
  }
}

.confirm {
  &__title {
    margin-bottom: 15px;
  }
  &__row {
    display: flex;
  }
  &__col {
    padding-right: 15px;
  }
}
</style>