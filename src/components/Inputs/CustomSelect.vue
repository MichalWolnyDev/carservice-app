<template>
  <div class="select" :tabindex="tabindex" @blur="open = false">
    <div class="select__selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="select__items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    // this.$emit("input", this.selected);
  },
};
</script>
<style lang="scss">
.select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;

  &__selected {
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid rgba(141, 141, 141, 0.2);
    color: #000;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    -webkit-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 20px -10px rgba(0,0,0,1);

    &.open {
      border: 1px solid rgba(141, 141, 141, 0.2);
      border-radius: 6px 6px 0px 0px;
    }

    &:after {
      position: absolute;
      content: "";
      top: 22px;
      right: 1em;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-color: #000 transparent transparent transparent;
    }
  }
  &__items {
    color: #000;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid rgba(141, 141, 141, 0.2);
    border-left: 1px solid rgba(141, 141, 141, 0.2);
    border-bottom: 1px solid rgba(141, 141, 141, 0.2);
    position: absolute;
    background-color: #fff;
    left: 0;
    right: 0;
    z-index: 1;
    max-height: 320px;
    overflow-y: scroll;

    div {
      color: #000;
      padding-left: 1em;
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: $blueActive;
        color: #fff;
      }
    }
  }
}
.selectHide {
  display: none;
}
</style>
