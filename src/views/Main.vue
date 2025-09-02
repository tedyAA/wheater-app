<template>
  <div class="main" >
    <div class="container">
      <div v-if="hasWeather">
        <div class="">
          <Searchbox @fetchWeather="fetchWeather"/>
          <CurrentWeatherCard :weather="weather"/>
          <InfoCard :weather="currentWeather" class="mt-5"/>
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

export default {
  name: 'Main',
  components: {CurrentWeatherCard, InfoCard, Searchbox},
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
      news: (state) => state.news
    }),
    hasWeather(){
      return this.weather.list && typeof this.currentWeather.main !='undefined'
    }
    // wrapperClass(){
    //   return typeof this.hasWeather
    //   && kelvinToCelsius(this.currentWeather.main.temp) > 15 ? 'warm' : (kelvinToCelsius(this.currentWeather.main.temp) <10? '':'r')
    // }
  },
  methods: {
    ...mapActions([
      'fetchWeather',
      'fetchForecast',
        'fetchNews'
    ]),
  },
  created() {
    this.fetchWeather(this.beforeQuery)
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
