<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" :class="navBG">
    <a class="navbar-brand" @click="main">
      <img src="../../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Weather App
    </a>
  </nav>
</template>

<script>

export default {
  name: "NavBar",
  computed:{
    navBG(){
      return this.$route.path.includes('News') ? 'navBlue' : ''
    }
  },
  methods:{
    main() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.navBlue{
  background-color: #568bc2 !important;
}
.navbar {
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
