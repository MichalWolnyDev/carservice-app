<template>
  <div class="menu__box">
    <div class="menu">
      <div class="menu__wrap mobile">
        <Hamburger @wasClicked="mobileMenu = !mobileMenu" />
      </div>

      <div class="menu__wrap" v-if="mobileMenu">
        <div class="menu__user">
          Jesteś zalogowany jako:
          <div class="menu__user-name">{{ getUserInfo.firstName }} {{ getUserInfo.lastName }}</div>
        </div>
        <router-link to="/">
          <div class="menu__item">Strona główna</div>
        </router-link>
        <router-link to="/profil">
          <div class="menu__item">Mój profil</div>
        </router-link>
        <router-link to="/pojazdy">
          <div class="menu__item">Moje pojazdy</div>
        </router-link>
        <router-link to="/warsztaty">
          <div class="menu__item">Wyszukaj warsztat</div>
        </router-link>
        <router-link to="/status">
          <div class="menu__item">Status naprawy</div>
        </router-link>
        <div class="menu__item menu__item-bottom" @click="logout">Wyloguj</div>
      </div>
    </div>
  </div>
</template>

<script>
import Hamburger from "@/components/Menu/Hamburger.vue";
import search from "@/mixins/search";
export default {
  name: "Menu",
  mixins: [search],
  components: {
    Hamburger,
  },
  data() {
    return {
      mobileMenu: true,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    checkWindowWidth() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth <= 960) {
        this.mobileMenu = false;
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.resetUserInfo()
        window.location.reload(true);

      this.$router.push("/login");

    },
  },
  mounted() {
    // window.onresize = this.checkWindowWidth();
    window.onload = this.checkWindowWidth();
    // window.addEventListener("resize", this.checkWindowWidth());
  },
};
</script>

<style lang="scss">
.menu {
  background-color: $darkBlue;
  height: 100%;

  &__box {
    @media (min-width: 960px) {
      height: 100vh;
      position: sticky;
      top: 0;
      left: 0;
    }
  }

  &__wrap {
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: #fff;
    height: 100%;
    &.mobile {
      display: none;
      @media (max-width: 960px) {
        display: block;
      }
    }
  }
  &__item {
    padding: 1rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: $blueActive;
    }
    &-bottom {
      cursor: pointer;
      margin-top: auto;
      &:hover {
        background-color: $blueActive;
      }
    }
  }
  &__user {
    padding: 1rem;
    transition: all 0.3s ease-in-out;
    font-weight: lighter;
    font-size: large;
    margin-bottom: 10px;
    &-name {
      font-size: larger;
      text-transform: capitalize;
    }
  }
}

.router-link-exact-active.router-link-active > .menu__item {
  background-color: $blueActive;
}
</style>