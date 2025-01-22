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
        locations: {},
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
        async fetchForecast({commit},lat, lng, days) {
            console.log(lat)
            console.log(lng)
            console.log(days)
            const response = await axios.get(`${this.state.url_base}forecast/daily?lat=${lat}&lon=${lng}&cnt=${days}&appid=${this.state.api_key}`)
            commit('setForecast', response.data)
            console.log(response.data)
        },
       saveWeather({commit}, coordinates){
            const response = axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${this.state.api_key}`)
                .then(coordinates => {  commit('saveWeather', coordinates) } )
           console.log(response)
        },
    }

})
