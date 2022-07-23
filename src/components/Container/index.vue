<template>
    <div class="container" :class="[`container__mode--${mode}`]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['mode']
}
</script>
<style lang="scss">

.container{

    &__mode {
        &--row{
        display: flex;
        flex-wrap: wrap;
        min-height: 100vh;
    }
    }
}

</style>