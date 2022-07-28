<template>
  <div id="app">
    <div class="app">
      <div class="app__wrapper">
        <div class="app__col sm">
          <Menu />
        </div>
        <div class="app__col big">
          <div class="app__container">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import search from "@/mixins/search";

export default {
  mixins: [search],
  components: {
    Menu,
  },
  created() {
    this.fetchUserInfo();
  },
};
</script>

<style lang="scss">
*,
::after,
::before {
  box-sizing: border-box;
}
html,
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
}
a,
a:visited {
  color: inherit;
  text-decoration: none;
}
p,
h1,
h2,
h3 {
  margin: 0;
}

.app {
  &__wrapper {
    display: flex;
    min-height: 100vh;

    @media (max-width: 960px) {
      display: block;
    }
  }
  &__col {
    &.sm {
      width: 20%;
      @media (max-width: 960px) {
        width: 100%;
      }
    }
    &.big {
      width: 80%;
      @media (max-width: 960px) {
        width: 100%;
      }
    }
  }
  &__container {
    padding: 30px;
  }
}
</style>
