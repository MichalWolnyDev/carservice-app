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
.status {
  &__message {
    margin: 30px 0;

    &-text {
      font-size: 20px;
    }
  }
}
.steps {
  margin: 50px 0;

  &__item {
    position: relative;
    padding-bottom: 40px;

    &-row {
      display: flex;
      align-items: center;
    }

    &::after {
      content: "";
      background-color: $gray;
      width: 2px;
      height: 40px;
      position: absolute;
      left: 23px;
      z-index: -1;
      top: 50px;
    }

    &.active {
      &::after {
        background-color: $green;
      }
    }

    &:last-of-type {
      &::after {
        display: none;
      }
    }

    @media (max-width: 320px) {
      padding-bottom: 20px;
    }
  }

  &__number {
    width: 50px;
    height: 50px;
    background-color: $gray;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-right: 20px;

    &.active {
      background-color: $green;
      box-shadow: 0 0 0 0 rgba(49, 209, 44, 1);
      transform: scale(1.2);
      animation: pulse 2s infinite;
    }

    &-text {
      font-size: 24px;
    }
  }

  &__message {
    flex: 2;
    &-text {
      font-weight: 700;
      color: $gray;

      &.active {
        color: $green;
      }
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(49, 209, 44, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(49, 209, 44, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(49, 209, 44, 0);
  }
}
</style>