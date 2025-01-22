<template>
  <div id="ap" class="main" :class="wrapperClass">
    <nav-bar/>
    <div>
      <div v-if="hasWeather">
        <div class="row ml-5 mr-5" >
          <div class="col-8">
            <Searchbox @fetchWeather="fetchWeather"/>
            <div class="weather-wrap">
              <div class="location-box">
                <div class="location">{{ cityName}},{{ countryName }}</div>
                <div class="date">{{ dateBuilder() }}</div>
              </div>
              <div class="weather-box">
                <div class="temp">{{ temperatureFormatted }}°C</div>
                <div class="weather">{{ weatherProg }}</div>

              </div>
            </div>
            <InfoCard/>
            <div class="forecast-wrapper">
              <div class="m-3" v-for="(item, index) in forecast" :key="index">
                <ForecastCard :forecast="item"/>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card mt-5">
              <p>this is title</p>
              <p>JPMorgan Chase CEO Jamie Dimon and Tesla chief Elon Musk, once adversaries in a prolonged legal battle, have settled their differences, the banker told CNBC in an interview on Wednesday.\n\"Elon and I have hugged it out,\" Dimon said, while praising Musk for run…</p>
            </div>
            <div class="card mt-5">
              <p>this is title</p>
              <p>JPMorgan Chase CEO Jamie Dimon and Tesla chief Elon Musk, once adversaries in a prolonged legal battle, have settled their differences, the banker told CNBC in an interview on Wednesday.\n\"Elon and I have hugged it out,\" Dimon said, while praising Musk for run…</p>
            </div>
            <div class="card mt-5">
              <p>this is title</p>
              <p>JPMorgan Chase CEO Jamie Dimon and Tesla chief Elon Musk, once adversaries in a prolonged legal battle, have settled their differences, the banker told CNBC in an interview on Wednesday.\n\"Elon and I have hugged it out,\" Dimon said, while praising Musk for run…</p>
            </div>
            <div class="card mt-5">
              <p>this is title</p>
              <p>JPMorgan Chase CEO Jamie Dimon and Tesla chief Elon Musk, once adversaries in a prolonged legal battle, have settled their differences, the banker told CNBC in an interview on Wednesday.\n\"Elon and I have hugged it out,\" Dimon said, while praising Musk for run…</p>
            </div>
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
import NavBar from "@/components/NavBar";
import {mapActions} from 'vuex'
import {mapState} from 'vuex'
import Searchbox from "@/components/Searchbox.vue";
import ForecastCard from "@/components/ForecastCard.vue";
import {isEmpty} from "lodash";
import InfoCard from "@/components/InfoCard.vue";

export default {
  name: 'Main',
  components: {InfoCard, ForecastCard, Searchbox, NavBar},
  data() {
    return {
      query: '',
      beforeQuery:'sofia'
    }
  },
  computed:{
    ...mapState({
      weather: (state) => state.weather,
      forecast: (state) => state.forecast
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
      && this.$store.state.weather.list[0].main.temp - 272 > 25 ? 'warm' : (this.weather.list[0].main.temp - 272 <10? '':'r')
    },
    sixDayForecast(){
      return this.$store.state.forecast.list.slice(0,6)
    }
  },
  methods: {
    ...mapActions([
      'fetchWeather',
      'fetchForecast'
    ]),
    dateBuilder() {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear()
      return `${day} ${date} ${month} ${year}`;
    },

  },
  watch:{
    weather(){
      if(!isEmpty(this.weather)){
        this.fetchForecast(this.weather.city.coord.lat, this.weather.city.coord.lon, 6)
      }
    }
  },
  created() {
    this.fetchWeather(this.beforeQuery)
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
}

#ap.warm {
  background-image: url("../assets/warm-bg.jpg");
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
