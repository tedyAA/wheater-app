<template>
  <div id="ap" class="main" :class="wrapperClass">
    <div class="container">
      <div v-if="hasWeather">
        <div class="">
          <Searchbox @fetchWeather="fetchWeather"/>
          <CurrentWeatherCard :weather="weather"/>
          <InfoCard :weather="currentWeather" class="mt-5"/>
          <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-2 row-cols-2">
            <div class="col" v-for="(item, index) in forecast" :key="index">
              <ForecastCard :forecast="item"/>
            </div>
          </div>
        </div>
        <div class="row" >
          <div v-for="(item,index) in news" :key="index" class="col">
            <NewsCard :news="item"/>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Weather not found</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapState} from 'vuex'
import Searchbox from "@/components/Searchbox.vue";
import ForecastCard from "@/components/ForecastCard.vue";
import {isEmpty} from "lodash";
import InfoCard from "@/components/InfoCard.vue";
import NewsCard from "@/components/NewsCard.vue";
import {dateBuilderDDMY, kelvinToCelsius} from "@/helpers";
import CurrentWeatherCard from "@/components/CurrentWeatherCard.vue";

export default {
  name: 'Main',
  components: {CurrentWeatherCard, NewsCard, InfoCard, ForecastCard, Searchbox},
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
    },
    wrapperClass(){
      return typeof this.hasWeather
      && kelvinToCelsius(this.currentWeather.main.temp) > 15 ? 'warm' : (kelvinToCelsius(this.currentWeather.main.temp) <10? '':'r')
    }
  },
  methods: {
    dateBuilderDDMY,
    ...mapActions([
      'fetchWeather',
      'fetchForecast',
        'fetchNews'
    ]),
  },
  watch:{
    weather(){
      if(!isEmpty(this.weather)){
        this.fetchForecast(this.weather.city.coord)
      }
    }
  },
  created() {
    this.fetchWeather(this.beforeQuery)
    this.fetchForecast(this.weather.city.coord)
    this.fetchNews()
    console.log(this.forecast)
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'monsterrat', sans-serif;
}

#ap {
  background-image: url("../assets/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  height: 100%;
  padding-top: 50px;
}

#ap.warm {
  background-image: url("../assets/sunny-bg.jpg");
  background-size: cover;
}
#ap.r {
  background-image: url("../assets/cold-bg.jpg");
  background-size: cover;
}

main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
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

.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.forecast-wrapper{
  display: flex;
  justify-content: space-between;
}
.navbar {
  opacity: 0.5;
}
</style>
