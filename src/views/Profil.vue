<template>
  <div>
   <div class="profile">
      <h2 class="title title__h2 text__center">Witaj! XYZ</h2>
        <div class="profile__title">
            Informacje o użytkowniku
        </div>
        <table class="profile__table"> 
          <tr>
           <th>Imię:</th>
           <td>XYZ</td>
          </tr>
          <tr>
            <th>Nazwisko:</th>
            <td>XYZ</td>
          </tr>
          <tr>
            <th>E-mail:</th>
            <td>xyz@abc.com</td>
          </tr>
          <tr>
            <th>Numer telefonu:</th>
            <td>+48213769420</td>
          </tr>
          <tr>
            <th>Twoja rola w serwisie:</th>
            <td class="profile__admin">ADMIN</td>
          </tr>
        </table>
       
   </div>
  </div>
</template>
<style lang="scss">
.profile{
  &__title{
    margin: 30px 0;
    font-size: 20px;
  }
  &__table{
    text-align:left;
  }
  th{
    font-weight:bold;
  }
  &__admin{
    color:red;
  }
  &__user{
    color:green;
  }
  &__employee{
    color:orange;
  }
}

</style>