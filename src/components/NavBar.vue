<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" @click="main">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Weather App
    </a>
    <div class="navbar-nav">
      <a class="nav-item nav-link active" @click="loc">news<span class="sr-only">(current)</span></a>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    </div>
  </nav>
</template>

<script>

export default {
  name: "NavBar",
  methods:{
    loc() {
      this.$router.push('/news')
    }
  }
}
</script>

<style scoped>

</style>
