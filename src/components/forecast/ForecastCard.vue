<template>
<div class="text-center forecast-card">
  <p class="text-white">{{dateBuilderDD(forecast.dt)}}</p>
  <img :src="forecastIcon" :alt="forecastIconAlt" width="90" height="90"/>
  <p><span class="min-temp">{{kelvinToCelsius(forecast.main.temp_min)}}°</span> / {{kelvinToCelsius(forecast.main.temp_max)}}°</p>
</div>
</template>

<script>
import {dateBuilderDD, kelvinToCelsius} from "@/helpers";

export default {
  name: "ForecastCard",
  methods: {kelvinToCelsius, dateBuilderDD},
  props: {
    forecast: {type: Object, required: true},
  },
  computed:{
    forecastIcon(){
      return `https://openweathermap.org/img/wn/${this.forecast.weather[0].icon}@2x.png`
    },
    forecastIconAlt(){
      return this.forecast.weather[0].main
    }
  }
}
</script>

<style scoped>
.forecast-card{
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 16px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.min-temp{
  color: #d1d1d1;
}
</style>
