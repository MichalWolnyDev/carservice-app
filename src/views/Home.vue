<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
const BASE_URL = process.env.VUE_APP_BASEURL
export default {
  name: 'Home',
  // components: {
  // }
  async created(){
    const response = await this.$axios.get(BASE_URL + '/@me')
    console.log(response)
  }
}
</script>
