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
        weather_api_key: '1cf838aa8644549473bdf55ad4147ca1',
        weather_url_base: 'https://api.openweathermap.org/data/2.5/',
        news: {},
        news_api_key: 'pub_6782142b207bc841e1835cfa4fd5b35696b43',
        news_url_base: 'https://newsdata.io/api/1/latest?',

    }),
    mutations: {
        setWeather(state, results) {
            state.weather = results
        },
        setForecast(state, results) {
            state.forecast = results
        },
        setNews(state, results) {
            state.news = results
        },
    },
    actions: {
        async fetchWeather({commit}, query) {
            const response = await axios.get(`${this.state.weather_url_base}forecast?q=${query}&appid=${this.state.weather_api_key}`)
            commit('setWeather', response.data)
        },
        async fetchForecast({commit}, coord) {
            const response = await axios.get(`${this.state.weather_url_base}forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${this.state.weather_api_key}`)
            const forecast = response.data.list.filter((item) =>response.data.list.indexOf(item) % 8 === 0)
            commit('setForecast', forecast)
        },
        async fetchNews({commit}) {
            const response = await axios.get(`https://newsdata.io/api/1/latest?language=bg,en&apikey=pub_6782142b207bc841e1835cfa4fd5b35696b43`)
            commit('setNews', response.data.results)
            console.log(response.data.results)
        }
    }

})
