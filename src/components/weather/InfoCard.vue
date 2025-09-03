<template>
  <div class="weather-info text-white mt-10 mb-10">
    <div class="row row-cols-1 row-cols-sm-2">
      <div class="col">
       <div class="d-flex justify-content-between">
         <p>RealFeel</p>
         <p>{{kelvinToCelsius(weather.main.temp)}}°</p>
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
          <p>{{kelvinToCelsius(weather.main.temp_min)}}°</p>
        </div>
        <hr />
      </div>
      <div class="col">
        <div class="d-flex justify-content-between">
          <p>Max Temperature</p>
          <p>{{kelvinToCelsius(weather.main.temp_max)}}°</p>
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
import {kelvinToCelsius} from "@/helpers";

export default {
  name:'InfoCard',
  methods: {kelvinToCelsius},
  props:{
    weather:{type: Object,required: true}
  },
  computed:{
    humidity(){
      return this.weather.main.humidity
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
  padding: 20px 45px;
  color: #FFF;
  width: 100%;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  font-size: 20px;
}
</style>
