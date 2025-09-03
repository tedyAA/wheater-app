<template>
<div class="text-center forecast-card">
  <p class="text-white">{{dateBuilderDD(forecast.dt)}}</p>
  <img :src="forecastIcon" width="90" height="90"/>
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
      switch(this.forecast.weather[0].main){
        case 'Clouds':
            return require('../../images/cloud.png')
        case 'Clear':
          return require('../../images/clear.png')
        case 'Rain':
          return require('../../images/rain.png')
        default:
          return '../assets/logo.png'
      }
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
