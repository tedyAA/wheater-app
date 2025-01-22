import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: () => ({
        weather: {},
        forecast: {},
        api_key: '1cf838aa8644549473bdf55ad4147ca1',
        url_base: 'https://api.openweathermap.org/data/2.5/',

    }),
    mutations: {
        setWeather(state, results) {
            state.weather = results
        },
        setForecast(state, results) {
            state.forecast = results
            console.log(state.forecast)
        },
        saveWeather(state, results){
           state.locations=results
           console.log(state.locations)
            //console.log()
        },
    },
    actions: {

        async fetchWeather({commit}, query) {
            const response = await axios.get(`${this.state.url_base}forecast?q=${query}&appid=${this.state.api_key}`)
            console.log(response.data)
            commit('setWeather', response.data)
        },
        async fetchForecast({commit},lat, lon, days) {
            console.log(lat + 'lat')
            console.log(lon+ 'lon')
            console.log(days+ + 'days')
            const response = await axios.get(`${this.state.url_base}forecast?lat=42.6975&lon=23.3242&appid=${this.state.api_key}`)
            const forecast = response.data.list.filter((item) =>response.data.list.indexOf(item) % 8 === 0)
            commit('setForecast', forecast)
            console.log('res')
        }
    }

})
