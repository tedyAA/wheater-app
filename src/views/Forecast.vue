<template>
  <div id="ap">
    <nav-bar/>
    <main>
      <div class="search-box mt-5">
        <input type="text"
               class="search-bar"
               placeholder="Search..."
               v-model="query"
              />
        <button class="btn btn-success mt-2" @click="fetchForecast(query)">Search</button>
      </div>
          <div class="row">
            <div class="col-sm"><forecast-card list-number="0"/></div>
            <div class="col-sm"><forecast-card list-number="8"/></div>
            <div class="col-sm"><forecast-card list-number="16"/></div>
            <div class="col-sm"><forecast-card list-number="16"/></div>
          </div>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ForecastCard from "@/components/ForecastCard";
import {mapActions} from 'vuex'
import {mapState} from 'vuex'

export default {
  name: 'Main',
  components: {
    NavBar,
  ForecastCard},
  data() {
    return {
      query: '',
      beforeQuery: 'sofia'
    }
  },
  methods: {
    ...mapActions([
      'fetchForecast'
    ]),
  },
  computed: mapState({
    forecast: state => state.forecast,
  }),
  created() {
    this.fetchForecast(this.beforeQuery)
  },
}
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'monsterrat', sans-serif;
}

#ap {
  background-image: url("../assets/sun.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#ap.warm {
  background-image: url("../assets/warm-bg.jpg");
}
</style>
