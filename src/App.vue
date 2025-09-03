<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/global/NavBar.vue";

export default {
  name: 'app',
  components: {NavBar},
}
</script>
<style>
html, body {
  height: 100%;
  margin: 0;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-image: url("assets/clouds.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#app::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
}

#app > * {
  position: relative;
  z-index: 1;
}

</style>
