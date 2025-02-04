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
        news_api_key: 'd9361f93c29b4198871b33a407634fdf',
        news_url_base: 'https://newsapi.org/v2/top-headlines',

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
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d9361f93c29b4198871b33a407634fdf`)
            commit('setNews', response.data)
        }
    }

})
