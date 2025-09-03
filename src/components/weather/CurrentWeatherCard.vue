<template>
<div>
  <CurrentWeatherCardLoading v-if="weatherLoading"/>
  <div class="weather-wrap" v-else>
    <div class="location-box">
      <div class="location">{{ cityName}},{{ countryName }}</div>
      <div class="date">{{ dateBuilderDDMY() }}</div>
    </div>
    <div class="weather-box">
      <div class="temp">{{ temperatureFormatted }}°C</div>
      <div class="weather">{{ weatherProg }}</div>

    </div>
  </div>
</div>
</template>
<script>
import {dateBuilderDDMY, kelvinToCelsius} from "@/helpers";
import {mapState} from "vuex";
import CurrentWeatherCardLoading from "@/components/loading/CurrentWeatherCardLoading.vue";

export default {
  name: 'CurrentWeatherCard',
  components: {CurrentWeatherCardLoading},
  props:{
    weather:Object,
  },
  computed:{
    ...mapState({
      weatherLoading: (state) => state.weatherLoading,
    }),
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
<style scoped lang="scss">
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.location-box .location {
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-box {
  text-align: center;
}

.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
