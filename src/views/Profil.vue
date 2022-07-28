<template>
  <div>
    <div class="profile">
      <h2 class="title title__h2 text__center">
        Witaj!
        <span class="profile__username"
          >{{ getUserInfo.firstName }} {{ getUserInfo.lastName }}</span
        >
      </h2>
      <div class="profile__title">Informacje o użytkowniku</div>
      <table class="profile__table" v-if="getUserInfo">
        <tr>
          <th>Imię:</th>
          <td>{{ getUserInfo.firstName }}</td>
        </tr>
        <tr>
          <th>Nazwisko:</th>
          <td>{{ getUserInfo.lastName }}</td>
        </tr>
        <tr>
          <th>E-mail:</th>
          <td>{{ getUserInfo.email }}</td>
        </tr>
        <tr>
          <th>Numer telefonu:</th>
          <td>{{ getUserInfo.phone }}</td>
        </tr>
        <tr>
          <th>Twoja rola w serwisie:</th>
          <td
            class="profile__admin"
            v-for="(role, id) in getUserInfo.authorities"
            :key="id"
          >
            {{ role }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import search from "@/mixins/search";
export default {
  mixins: [search],
};
</script>
<style lang="scss">
.profile {
  &__username{
    text-transform: capitalize;
  }
  &__title {
    margin: 30px 0;
    font-size: 20px;
  }
  &__table {
    text-align: left;
  }
  th {
    font-weight: bold;
  }
  &__admin {
    color: red;
  }
  &__user {
    color: green;
  }
  &__employee {
    color: orange;
  }
}
</style>