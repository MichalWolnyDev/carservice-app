<template>
  <div>
    <label>
      <input type="checkbox" :value="inputVal" v-model="model" />
      <span>{{ label }}</span>
    </label>
  </div>
</template>
<script>
export default {
    name: 'Checkbox',
    props: {
        label: String,
        inputVal: String,
        value: Array
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(value){
                this.$emit("input", value);
            }
        }
    }
}
</script>