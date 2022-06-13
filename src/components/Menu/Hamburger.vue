<template>
  <div>
    <div class="hamburger__wrap">
      <div class="hamburger" :class="{ open: openHamburger }" @click="openHamburger = !openHamburger, $emit('wasClicked')">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hamburger",
  data () {
    return {
        openHamburger: false,
    }
  }
};
</script>
<style lang="scss" scoped>
.hamburger {
  display: inline-block;
  width: 30px;
  height: 25px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &__wrap {
    display: flex;
    justify-content: flex-end;
    margin: 1rem;
  }

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2) {
      top: 10px;
    }
    &:nth-child(3) {
      top: 20px;
    }

    
  }
  &.open {
      span {
        &:nth-child(1) {
          top: 18px;
          -webkit-transform: rotate(135deg);
          -moz-transform: rotate(135deg);
          -o-transform: rotate(135deg);
          transform: rotate(135deg);
        }
        &:nth-child(2) {
          opacity: 0;
          left: -60px;
        }
        &:nth-child(3) {
          top: 18px;
          -webkit-transform: rotate(-135deg);
          -moz-transform: rotate(-135deg);
          -o-transform: rotate(-135deg);
          transform: rotate(-135deg);
        }
      }
    }
}
</style>