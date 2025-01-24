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
        news: {},
        weather_api_key: '1cf838aa8644549473bdf55ad4147ca1',
        weather_url_base: 'https://api.openweathermap.org/data/2.5/',
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
        async fetchForecast({commit}) {
            const response = await axios.get(`${this.state.weather_url_base}forecast?lat=42.6975&lon=23.3242&appid=${this.state.weather_api_key}`)
            const forecast = response.data.list.filter((item) =>response.data.list.indexOf(item) % 8 === 0)
            commit('setForecast', forecast)
        },
        async fetchNews({commit}) {
            const response = await axios.get(`${this.state.news_url_base}?country=us&apiKey=${this.state.news_api_key}`)
            commit('setNews', response.data)
        }
    }

})
