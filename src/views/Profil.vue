<template>
  <div>
   <div class="profile">
      <h2 class="title title__h2 text__center">Witaj! XYZ</h2>
        <div class="profile_title">
            Informacje o użytkowniku
        </div>
        <table class="profile_table"> 
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
            <th>Twoja rola w serwisie:</th>
            <td class="profile_admin">ADMIN</td>
          </tr>
        </table>
       
   </div>
  </div>
</template>
<style lang="scss">
.profile{
  &_title{
    margin: 30px 0;
    font-size: 20px;
  }
  &_table{
    text-align:left;
  }
  th{
    font-weight:bold;
  }
  &_admin{
    color:red;
  }
  &_user{
    color:green;
  }
  &_employee{
    color:orange;
  }
}

</style>