<template>
  <div class="listingCars shadow">
    <p class="listingCars__title">Volkswagen Passat</p>

    <div class="listingCars__wrap">
      <div class="listingCars__col">
        <table class="listingCars__table">
          <tr>
            <th>Marka:</th>
            <td>Volkswagen</td>
          </tr>
          <tr>
            <th>Model:</th>
            <td>Passat</td>
          </tr>
          <tr>
            <th>Numer rejestracyjny:</th>
            <td>PZ2137</td>
          </tr>
          <tr>
            <th>Silnik:</th>
            <td>2.0 8V</td>
          </tr>
          <tr>
            <th>Moc silnika:</th>
            <td>130 KM</td>
          </tr>
          <tr>
            <th>Rodzaj skrzyni biegów:</th>
            <td>Manualna</td>
          </tr>
          <tr>
            <th>Rok produkcji:</th>
            <td>1998</td>
          </tr>
          <tr>
            <th>Typ nadwozia:</th>
            <td>Sedan</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

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