<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" @click="main">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Weather App
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" @click="main">Home <span class="sr-only">(current)</span></a>
      </div>
      <div class="navbar-nav">
        <a class="nav-item nav-link active" @click="loc">My Locations <span class="sr-only">(current)</span></a>
      </div>
      <div class="navbar-nav">
        <a class="nav-item nav-link active" @click="fore">Forecast<span class="sr-only">(current)</span></a>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "NavBar",
  methods:{
    main(){
      this.$router.push('/')
    },
    loc(){
      this.$router.push('/loc')
    },
    fore(){
      this.$router.push('/fore')
    }
  }
}
</script>

<style scoped>

</style>