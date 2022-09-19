<template>
  <div>
    <h2 class="title title__h2 text__center">Mój warsztat</h2>
    <div class="garage" v-if="getOwnedGarages.length > 0">
      <div class="garage__title" v-if="getOwnedGarages.length > 1">Informacje o warsztatach</div>
      <div class="garage__title" v-else>Informacje o warsztacie</div>
      <table class="garage__table" v-for="(garage, id) in getOwnedGarages" :key="id">
        <tr>
          <th>Nazwa serwisu:</th>
          <td>{{garage.name}}</td>
        </tr>
        <tr>
          <th>Adres:</th>
          <td>{{garage.address}},
            {{garage.postCode}} {{garage.city.name}}
          </td>
        </tr>
        <tr>
          <th>Godziny otwarcia:</th>
           <ul>
              <li>Pn - Pt: {{garage.hoursWeek}} </li>
              <li>Sobota: {{garage.hoursSaturday}} </li>
              <li>Niedziela: {{garage.horusSunday}} </li>
           </ul>
        </tr>
        <tr>
          <th>Oferowane usługi:</th>
          <td>
            <ul>
              <li v-for="service in garage.services" :key="service.id">
                {{service.service}}
              </li>
              
            </ul>
          </td>
        </tr>
      </table>
    </div>
    <p class="garage__message" v-else>Nie posiadasz jeszcze swojego warsztatu!</p>
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
      padding-bottom: 30px;
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