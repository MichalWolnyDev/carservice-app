<template>
  <div class="select__wrap">
    <label class="select__label">
      <slot></slot>
    </label>
    <div class="select" :tabindex="tabindex" @blur="open = false">
      <div
        v-if="!textMode"
        class="select__selected"
        :class="{ open: open }"
        @click="open = !open"
      >
        <template v-if="reservationForm && selected.model">
          {{ selected.model.make.name }} {{ selected.model.name }}
        </template>
        <template v-else>
          {{ selected.name }}
        </template>
      </div>

      <input
        type="text"
        class="select__selected"
        @input="handleInput"
        @click="open = !open"
        :placeholder="selected.name"
        v-model="textToFilter"
        v-else
      />
      <div class="select__items" :class="{ selectHide: !open }">
        <div
          v-for="(option, i) of options"
          :key="i"
          @click="
            selected = option;
            open = false;
            textToFilter = '';
            $emit('input', option);
          "
        >
          <template v-if="reservationForm">
            {{ option.model.make.name }} {{ option.model.name }}
          </template>
          <template v-else>
            {{ option.name }}
          </template>
        </div>
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
    textMode: {
      type: Boolean,
      default: false,
    },
    reservationForm: {
      type: Boolean,
      default: false,
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
      textToFilter: "",
    };
  },
  methods: {
    handleInput(e) {
      this.open = true;
      console.log(e.target.value);
      if (e.target.value.length == 0) {
        this.textToFilter = "";
      }
      this.$emit("typetext", e.target.value);
    },
  },
  computed: {
    inputPlaceholder() {
      return this.selected.name != "" ? this.selected.name : "";
    },
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
  // height: 40.4px;
  font-size: 14px;

  &__wrap {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  }

  &__selected {
    background-color: #fff;
    color: #000;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    height: 40.4px;
    width: 100%;

    border: 1px solid #cecece;
    border-radius: 5px;
    padding: 0.6rem;

    &.open {
      border: 1px solid rgba(141, 141, 141, 0.2);
      border-radius: 6px 6px 0px 0px;
    }

    &:after {
      position: absolute;
      content: "";
      top: 18px;
      right: 1em;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-color: #000 transparent transparent transparent;
    }

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #000;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #000;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #000;
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
      line-height: 40.4px;

      &:hover {
        background-color: $blueActive;
        color: #fff;
      }
    }
  }
  &__label {
    font-size: 14px;
    margin-bottom: 10px;
  }
}
.selectHide {
  display: none;
}
</style>
