<template>
  <div>
    <h2 class="title title__h2 text__center">Mój warsztat (dla właściciela)</h2>
    <div class="garage">
      {{getOwnedGarages}}
      <div class="garage__title">Informacje o warsztacie</div>
      <table class="garage__table">
        <tr>
          <th>Nazwa serwisu:</th>
          <td>AutoMech - Mechanik</td>
        </tr>
        <tr>
          <th>Adres:</th>
          <td>ul. Kolorowa 20/2
            60-001 Poznań
          </td>
        </tr>
        <tr>
          <th>Godziny otwarcia:</th>
           <ul>
              <li>Pn - Pt: 8:00 - 20:00 </li>
              <li>Sobota: nieczynne </li>
              <li>Niedziela: nieczynne </li>
           </ul>
        </tr>
        <tr>
          <th>Oferowane usługi:</th>
          <td>
            <ul>
              <li>Sprawdzenie samochodu przed zakupem</li>
              <li>Serwis klimatyzacji</li>
              <li>Poprawki lakiernicze</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
    <p class="garage__message">Nie posiadasz jeszcze swojego warsztatu!</p>
  </div>
 
</template>
<script>
import search from "@/mixins/search"
export default {
  name: 'Warsztat',
  mixins: [search],
  mounted() {
    this.fetchOwnedGarages()
  }
}
</script>
<style lang="scss">
  .garage {
    &__title {
      margin: 30px 0;
      font-size: 20px;
    }
    &__table {
      text-align: left;
    }
    &__message{
      margin: auto;
      width: 40%;
      font-size: 20px;
    }
    th {
      font-weight: bold;
    }
    li {
      text-align: left;
    }
  }
  </style>