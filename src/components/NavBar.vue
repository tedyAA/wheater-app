<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" @click="main">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Weather App
    </a>
    <div class="navbar-nav">
      <a class="nav-item nav-link active" @click="loc">News<span class="sr-only">(current)</span></a>
    </div>
  </nav>
</template>

<script>

export default {
  name: "NavBar",
  methods:{
    loc() {
      this.$router.push('/news')
    },
    main() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
