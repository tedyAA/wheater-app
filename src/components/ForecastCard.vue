<template>
    <div class="location-box">
      <div class="location">{{forecast.city.name}},{{forecast.city.country }}</div>
     <div class="weather-box">
        <div class="date">{{ forecast.list[listNumber].dt_txt }}</div>
        <div class="temp">{{ Math.round((forecast.list[listNumber].main.temp - 272)) }}°C</div>
        <div class="weather">{{ forecast.list[listNumber].weather[0].description }}</div>
      </div>
    </div>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ForecastCard",
  computed: mapState({
    forecast: state => state.forecast,
  }),
  props: {
    listNumber: Number,
  }
}
</script>

<style scoped>

</style>