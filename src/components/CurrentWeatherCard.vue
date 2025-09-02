<template>
  <div class="weather-wrap">
    <div class="location-box">
      <div class="location">{{ cityName}},{{ countryName }}</div>
      <div class="date">{{ dateBuilderDDMY() }}</div>
    </div>
    <div class="weather-box">
      <div class="temp">{{ temperatureFormatted }}°C</div>
      <div class="weather">{{ weatherProg }}</div>

    </div>
  </div>
</template>
<script>
import {dateBuilderDDMY, kelvinToCelsius} from "@/helpers";

export default {
  name: 'CurrentWeatherCard',
  props:{
    weather:Object,
  },
  computed:{
    temperatureFormatted(){
      return Math.round(kelvinToCelsius(this.weather.list[0].main.temp ))
    },
    weatherProg(){
      return this.weather.list[0].weather[0].description
    },
    cityName(){
      return this.weather.city.name
    },
    countryName(){
      return this.weather.city.country
    },
  },
  methods:{
    dateBuilderDDMY
  }
}
</script>
