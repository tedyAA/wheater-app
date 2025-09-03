<template>
  <div class="main" >
    <div class="container">
      <div v-if="hasWeather">
        <div class="">
          <Searchbox @fetchWeather="fetchWeather"/>
          <CurrentWeatherCard :weather="weather"/>
          <InfoCard :weather="currentWeather" class="mt-5"/>
          <ForecastList :forecast="forecast"/>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapState} from 'vuex'
import Searchbox from "@/components/Searchbox.vue";
import InfoCard from "@/components/InfoCard.vue";
import CurrentWeatherCard from "@/components/CurrentWeatherCard.vue";
import {isEmpty} from "lodash";
import ForecastList from "@/components/forecast/ForecastList.vue";

export default {
  name: 'Main',
  components: {ForecastList, CurrentWeatherCard, InfoCard, Searchbox},
  data() {
    return {
      query: '',
      beforeQuery:'sofia'
    }
  },
  computed:{
    ...mapState({
      weather: (state) => state.weather,
      currentWeather: (state) => state.currentWeather,
      forecast: (state) => state.forecast,
    }),
    hasWeather(){
      return this.weather.list && typeof this.currentWeather.main !='undefined'
    },
    hasForecast(){
      return !isEmpty(this.forecast)
    }
  },
  methods: {
    ...mapActions([
      'fetchWeather',
      'fetchForecast'
    ]),
  },
  watch:{
    weather(){
      if(!isEmpty(this.weather)){
        this.fetchForecast(this.weather.city.name)
        console.log(this.forecast)
      }
    }
  },
  created() {
    this.fetchWeather(this.beforeQuery)
    this.fetchForecast(this.beforeQuery)
  },
}
</script>

<style scoped lang="scss">
.main {
  transition: 0.4s;
  height: 100%;
  padding-top: 50px;
}

.navbar {
  opacity: 0.5;
}
</style>
