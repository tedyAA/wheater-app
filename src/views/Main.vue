<template>
  <div id="ap" class="main" :class="wrapperClass">
    <div class="container">
      <div v-if="hasWeather">
        <div class="">
          <Searchbox @fetchWeather="fetchWeather"/>
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
          <InfoCard :weather="weather.list[0]" class="mt-5"/>
          <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-2 row-cols-2">
            <div class="col" v-for="(item, index) in forecast" :key="index">
              <ForecastCard :forecast="item"/>
            </div>
          </div>
        </div>
        <div class="row" >
          <div v-for="(item,index) in newsToShow" :key="index" class="col">
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
import {dateBuilderDDMY} from "@/helpers";

export default {
  name: 'Main',
  components: {NewsCard, InfoCard, ForecastCard, Searchbox},
  data() {
    return {
      query: '',
      beforeQuery:'sofia'
    }
  },
  computed:{
    ...mapState({
      weather: (state) => state.weather,
      forecast: (state) => state.forecast,
      news: (state) => state.news
    }),
    temperatureFormatted(){
      return Math.round((this.weather.list[0].main.temp - 272))
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
    hasWeather(){
      return this.weather.list && typeof this.weather.list[0].main !='undefined'
    },
    wrapperClass(){
      return typeof this.$store.state.weather.list[0].main !='undefined'
      && this.$store.state.weather.list[0].main.temp - 272 > 15 ? 'warm' : (this.weather.list[0].main.temp - 272 <10? '':'r')
    },
    newsToShow(){
      const news = this.news
      for (let i = news.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [news[i], news[j]] = [news[j], news[i]];
      }
      return news.slice(0,3);
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
