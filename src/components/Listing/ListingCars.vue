<template>
  <div>
    <h2 class="title title__h2 text__center">Moje pojazdy</h2>
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
           <td>2.0</td>
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
     <div class="listingCars shadow">
      <p class="listingCars__title">Volvo V50</p>

      <div class="listingCars__wrap">
        <div class="listingCars__col">
          <table class="listingCars__table"> 
          <tr>
           <th>Marka:</th>
           <td>Volvo</td>
          </tr>
          <tr>
           <th>Model:</th>
           <td>V50</td>
          </tr>
          <tr>
           <th>Numer rejestracyjny:</th>
           <td>PZ42069</td>
          </tr>
          <tr>
           <th>Silnik:</th>
           <td>1.6 D</td>
          </tr>
          <tr>
            <th>Rodzaj skrzyni biegów:</th>
            <td>Manualna</td>
          </tr>
          <tr>
            <th>Rok produkcji:</th>
            <td>2008</td>
          </tr>
          <tr>
            <th>Typ nadwozia:</th>
            <td>Kombi</td>
          </tr>
         </table>
        </div>
       </div>
      </div>          
   <div class="listingCars shadow">
      <p class="listingCars__title">Fiat Seicento</p>

      <div class="listingCars__wrap">
        <div class="listingCars__col">
          <table class="listingCars__table"> 
          <tr>
           <th>Marka:</th>
           <td>Fiat</td>
          </tr>
          <tr>
           <th>Model:</th>
           <td>Seicento</td>
          </tr>
          <tr>
           <th>Numer rejestracyjny:</th>
           <td>K1FRIZ</td>
          </tr>
          <tr>
           <th>Silnik:</th>
           <td>1.1</td>
          </tr>
          <tr>
           <th>Rodzaj skrzyni biegów:</th>
            <td>Automatyczna</td>
          </tr>
          <tr>
            <th>Rok produkcji:</th>
            <td>1999</td>
          </tr>
          <tr>
            <th>Typ nadwozia:</th>
            <td>Hatchback</td>
          </tr>
         </table>
        </div>
       </div>
      </div>        
         
      
    
  </div>
</template>

<style lang="scss">
.listingCars {
  padding: 20px;
  margin: 20px 0;
 &__table{
     text-align:left;
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