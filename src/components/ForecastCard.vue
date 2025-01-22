<template>
<div class="text-center forecast-card">
  <p class="text-white">{{dateBuilder}}</p>
  <img :src="forecastIcon" width="90" height="90"/>
  <p><span class="min-temp">{{minTemp}}°</span> / {{maxTemp}}°</p>
</div>
</template>

<script>
export default {
  name: "ForecastCard",
  props: {
    forecast: {type: Object, required: true},
  },
  computed:{
    minTemp(){
      return Math.round((this.forecast.main.temp_min - 272))
    },
    maxTemp(){
      return Math.round((this.forecast.main.temp_max - 272))
    },
    forecastIcon(){
      switch(this.forecast.weather[0].main){
        case 'Clouds':
            return require('../images/cloud.png')
        case 'Clear':
          return require('../images/clear.png')
        case 'Rain':
          return require('../images/rain.png')
        default:
          return '../assets/logo.png'
      }
    },
    dateBuilder() {
      const d = new Date(this.forecast.dt * 1000)
      let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",]
      let day = days[d.getDay()];
      let date = d.getDate();
      return `${day} ${date}`;
    },
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
