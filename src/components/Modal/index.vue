<template>
  <div class="modal modal__flex">
    <div class="modal__box">
      <div class="modal__header">
        <p class="modal__title">
          {{ title }}
        </p>
        <div class="modal__close" @click="$emit('closeModal')">
          <span> X </span>
        </div>
      </div>
      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    title: String,
  },
};
</script>
<style lang="scss">
.modal {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 3rem;

  &__flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__header {
    padding-bottom: 1rem;
    border-bottom: 1px solid #000;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
  }

  &__close {
    cursor: pointer;
    span {
      font-size: 1.4rem;
      font-weight: 700;
    }
  }

  &__box {
    background-color: #fff;
    height: 100%;
    width: 1150px;
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem;
    overflow: hidden;
  }

  &__content{
    height: 100%;
    overflow-y: scroll;
    padding-right: 20px;
  }
}
</style>