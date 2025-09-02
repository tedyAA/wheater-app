<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'app',
  components: {NavBar},
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  min-height: 100vh !important;
  background-image: url("assets/clouds.jpg");
  background-size: cover;
  background-repeat: no-repeat;

}

#app::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4); /* Adjust opacity here */
  pointer-events: none; /* Allows clicks to pass through */
}

#app > * {
  position: relative;
  z-index: 1;
}
</style>
