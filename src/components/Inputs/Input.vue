<template>
  <div class="input">
    <label class="input__label">
      <slot></slot>
    </label>
    <input class="input__item" :type="type" :placeholder="placeholder" />
  </div>
</template>
<script>
export default {
  props: ["type", "placeholder"],
};
</script>
<style lang="scss">
.input {
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  &__label {
    font-size: 14px;
    margin-bottom: 10px;
  }
  &__item {
    border: 1px solid $lightGray;
    border-radius: 5px;
    padding: 0.7rem;

    &[type="text"],
    &[type="password"] {
      outline: none;
    }
  }
}
</style>