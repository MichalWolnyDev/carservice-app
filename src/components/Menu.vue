<template>
  <div class="menu__box">
    <div class="menu">
      <div class="menu__wrap">
        <router-link to="/">
          <div class="menu__item">Home</div>
        </router-link>
        <router-link to="/warsztaty">
          <div class="menu__item">Wyszukaj warsztat</div>
        </router-link>
        <router-link to="/status">
          <div class="menu__item">Status naprawy</div>
        </router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.menu {
  background-color: $darkBlue;
  min-width: 300px;
  max-width: 100%;
  height: 100%;

  &__box {
    height: 100%;
  }

  &__wrap {
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: #fff;
  }
  &__item {
    padding: 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: $blueActive;
    }
  }
}

.router-link-exact-active.router-link-active > .menu__item {
  background-color: $blueActive;
}
</style>