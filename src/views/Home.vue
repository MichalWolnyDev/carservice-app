<template>
  <div class="home">
    <div class="home__wrap">
      <div class="home__header">
        <h1 class="home__title">
          Witaj! <span class="home__name">{{ getUserInfo.firstName }} {{ getUserInfo.lastName }}</span>
        </h1>
        <p class="home__description">
          Prosimy o zapoznanie się z wideoinstrukcją obsługi systemu.
        </p>
      </div>
      <div class="home__video-wrap">
        <div class="home__videobox" v-if="getUserInfo.authorities[0] == 'USER'">
          <video class="home__video" controls>
            <source src="@/assets/video/user.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="home__videobox" v-if="getUserInfo.authorities[0] == 'OWNER'">
          <video class="home__video" controls>
            <source src="@/assets/video/owner.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="home__videobox" v-if="getUserInfo.authorities[0] == 'MECHANIC'">
          <video class="home__video" controls>
            <source src="@/assets/video/mechanic.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import search from "@/mixins/search";

export default {
  name: "Home",
  mixins: [search],

  mounted() {
    this.fetchUserInfo();
  },
};
</script>

<style lang="scss">
.home {
  &__title {
    text-align: center;
    margin: 0 0 30px;
  }
  &__video{
    width: 100%;
  }
  &__description{
    text-align: center;
    margin: 0 0 15px;
  }
  &__videobox{
        max-width: 768px;
    margin: 0 auto;
  }
  &__name{
    text-transform: capitalize;
  }
}
.reservation {
  &__title {
    margin: 30px 0;
    font-size: 20px;
  }
  &__note {
    font-size: 15px;
    color: red;
  }
  &__table {
    text-align: left;
    border-spacing: 5px;
  }
  th {
    font-weight: bold;
  }
}
</style>