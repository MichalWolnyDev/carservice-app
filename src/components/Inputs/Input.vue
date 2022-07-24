<template>
  <div class="input">
    <label class="input__label">
      <slot></slot>
    </label>
    <input
      class="input__item"
      :type="type"
      :class="{'error': error}"
      :placeholder="placeholder"
      @input="handleInput"
    />
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    error: {
      type: Boolean
    }

  },
  data() {
    return {
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  }
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

    &.error {
      border: 1px solid $redError;
    }
  }
}
</style>