<template>
<div class="text-center">
  <p class="text-white">{{dateBuilder}}</p>
  <img :src="forecastIcon" width="130" height="50"/>
</div>
</template>

<script>
export default {
  name: "ForecastCard",
  props: {
    forecast: {type: Object, required: true},
  },
  computed:{
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

</style>
