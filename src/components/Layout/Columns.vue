<template>
    <div class="columns" :class="[`columns__mode--${mode}`]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['mode']

}
</script>
<style lang="scss">
.columns {

    &__mode {
        &--equal{
            width: 50%;
        }
    }
}
</style>