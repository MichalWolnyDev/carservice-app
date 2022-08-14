<template>
 
  <div class="home">
    <h2 class="title title__h2 text__center">Strona główna</h2>
     <div class="reservation__title">Aktualne rezerwacje</div>
    <table class="reservation__table">
        <tr>
          <th>Pojazd</th>
          <th>Termin odstawienia pojazdu</th>
          <th>Termin oddania pojazdu</th>
          <th>Szczegóły</th>
        </tr>
        <tr>
          <td>Volskwagen Passat</td>
          <td>22.09.2022</td>
          <td>23.09.2022</td>
          <td>Wymiana filtrów</td>
        </tr>
        <tr>
          <td>Opel Omega</td>
          <td>26.09.2022</td>
          <td>26.09.2022</td>
          <td>Wymiana opon</td>
        </tr>
      </table>
      <div class="reservation__title">Uwagi</div>
      <div class="reservation__note">Dnia 05.10.2022 pojazd Volkswagen Passat utraci ważność przeglądu technicznego.</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  // components: {
  // }

};
</script>

<style lang="scss">
.reservation {
  &__title {
    margin: 30px 0;
    font-size: 20px;
  }
  &__note{ 
    font-size: 15px;
    color:red;
  }
  &__table {
    text-align: left;
    border-spacing:5px
  }
  th {
    font-weight: bold;
  }
}
</style>