<template>
  <div id="background" class="background" >
    <div class="locations">
      <nav-bar/>
      <main>
        <div class="boxBackground">
        <my-locations-card/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import MyLocationsCard from "@/components/MyLocationsCard";
import NavBar from "@/components/NavBar";
export default {
  name: "Locations",
  components:{
    MyLocationsCard,
    NavBar
  }
}
</script>

<style scoped>
#background {
  background-image: url("../assets/sun.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
.boxBackground{
  display: block;
  margin-top: 5%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
</style>
