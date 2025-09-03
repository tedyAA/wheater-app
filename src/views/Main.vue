<template>
  <div class="main" >
    <div class="container">
      <div v-if="hasWeather">
        <div class="">
          <SearchBox @fetchWeather="fetchWeather"/>
          <CurrentWeatherCard :weather="weather"/>
          <InfoCard :weather="currentWeather" class="mt-5"/>
          <ForecastList :forecast="forecast"/>
        </div>
        </div>
      <Error v-if="error"/>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapState} from 'vuex'
import SearchBox from "@/components/global/Searchbox.vue";
import InfoCard from "@/components/weather/InfoCard.vue";
import CurrentWeatherCard from "@/components/weather/CurrentWeatherCard.vue";
import {isEmpty} from "lodash";
import ForecastList from "@/components/forecast/ForecastList.vue";
import Error from "@/components/Error.vue";

export default {
  name: 'Main',
  components: {Error, ForecastList, CurrentWeatherCard, InfoCard, SearchBox},
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
      error: (state) => state.error,
    }),
    hasWeather(){
      return this.weather.list && typeof this.currentWeather.main !='undefined'
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
