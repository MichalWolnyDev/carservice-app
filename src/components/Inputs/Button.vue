<template>
  <div>
    <button class="button" :class="{w100: big, green: green}">
      <slot>
        </slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: ['big', 'green']
};
</script>
<style lang="scss">
.button {
    background-color: $darkBlue;
    color: #fff;
    outline: none;
    border: 0;
    padding: 1rem;
    min-width: 150px;
    max-width: 100%;
    cursor: pointer;
    font-weight: 600;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: $blueActive;
    }

    &.w100{
      min-width: 100%;
    }

    &.green{
      background-color: $green;
    }
}
</style>