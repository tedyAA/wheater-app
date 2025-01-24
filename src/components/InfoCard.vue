<template>
  <div class="weather-info text-white mt-10 mb-10">
    <div class="row row-cols-1 row-cols-sm-2">
      <div class="col">
       <div class="d-flex justify-content-between">
         <p>RealFeel</p>
         <p>{{realFeelFormatted}}°</p>
       </div>
        <hr />
      </div>
      <div class="col">
        <div class="d-flex justify-content-between">
          <p>Humidity</p>
          <p>{{humidity}}%</p>
        </div>
        <hr />
      </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2">
      <div class="col">
        <div class="d-flex justify-content-between">
          <p>Min Temperature</p>
          <p>{{minTemp}}°</p>
        </div>
        <hr />
      </div>
      <div class="col">
        <div class="d-flex justify-content-between">
          <p>Max Temperature</p>
          <p>{{maxTemp}}°</p>
        </div>
        <hr />
      </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2">
      <div class="col">
        <div class="d-flex justify-content-between">
          <p>Clouds Coverage</p>
          <p>{{clouds}}</p>
        </div>
        <hr />
      </div>
      <div class="col">
        <div class="d-flex justify-content-between">
          <p>Wind Speed</p>
          <p>{{windSpeed}}</p>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'InfoCard',
  props:{
    weather:{type: Object,required: true}
  },
  computed:{
    realFeelFormatted(){
      return Math.round((this.weather.main.temp - 272))
    },
    humidity(){
      return this.weather.main.humidity
    },
    minTemp(){
      return Math.round((this.weather.main.temp_min - 272))
    },
    maxTemp(){
      return Math.round((this.weather.main.temp_max - 272))
    },
    clouds(){
      return this.weather.clouds.all +'%'
    },
    windSpeed(){
      return 'WSW ' + this.weather.wind.speed +' mph'
    },
  }
}
</script>
<style>
.weather-info{
  display: inline-block;
  padding: 40px;
  color: #FFF;
  font-size: 18px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgb(107 107 107 / 60%);
  border-radius: 16px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  height: fit-content;
  width: 100%;
}
</style>
