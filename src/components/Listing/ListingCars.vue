<template>
  <div class="listingCars shadow" v-if="car">
    <p class="listingCars__title">{{car.model.make.name}} {{car.model.name}}</p>

    <div class="listingCars__wrap">
      <div class="listingCars__col">
        <table class="listingCars__table">
          <tr>
            <th>Marka:</th>
            <td>{{car.model.make.name}}</td>
          </tr>
          <tr>
            <th>Model:</th>
            <td>{{car.model.name}}</td>
          </tr>
          <tr>
            <th>Numer rejestracyjny:</th>
            <td>{{car.registrationNumber}}</td>
          </tr>
          <tr>
            <th>Rodzaj silnika:</th>
            <td>{{car.engine}}</td>
          </tr>
          <tr>
            <th>Rodzaj skrzyni biegów:</th>
            <td>{{car.gearbox}}</td>
          </tr>
          <tr>
            <th>Rok produkcji:</th>
            <td>{{car.year}}</td>
          </tr>
          <tr>
            <th>Typ nadwozia:</th>
            <td>{{car.bodyType}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListingCars',
  props: ['car']
}
</script>
<style lang="scss">
.listingCars {
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
</style>