<template>
  <div>
    <button class="button" :class="{w100: big, green: green, arrow: arrow, blue: blue}">
      <slot>
        </slot>
        <slot name="arrow"></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: ['big', 'green', 'arrow', 'blue']
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

    &.blue {
      background-color: $darkBlue;
    }

    &:hover {
        background-color: $blueActive;
    }

    &.w100{
      min-width: 100%;
    }

    &.green{
      background-color: $green;
    }

    &.arrow { 
      display: flex;
      align-items: center;

      img {
        max-width: 30px;
      }
    }
}
</style>