import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: () => ({
        weather: {},
        weatherLoading: false,
        forecastLoading: false,
        error: false,
        currentWeather: {},
        forecast: [],
        weather_api_key: process.env.VUE_APP_API_KEY,
        weather_url_base: 'https://api.openweathermap.org/data/2.5/',

    }),
    mutations: {
        setWeather(state, results) {
            state.weather = results
        },
        setCurrentWeather(state, results) {
            state.currentWeather = results.list[0]
        },
        setForecast(state, results) {
            state.forecast = results
        },
    },
    actions: {
        async fetchWeather({commit}, query) {
            this.state.weatherLoading = true
            try{
                const response = await axios.get(`${this.state.weather_url_base}forecast?q=${query}&appid=${this.state.weather_api_key}`)
                commit('setWeather', response.data)
                commit('setCurrentWeather', response.data)
            } catch (error) {
               this.state.error = true
            } finally {
                setTimeout(() => {
                    this.state.weatherLoading = false
                }, 3000);
            }
        },
        async fetchForecast({commit}, query) {
            this.state.forecastLoading = true
            try{
                const response = await axios.get(`${this.state.weather_url_base}forecast?q=${query}&appid=${this.state.weather_api_key}`)
                const forecast = response.data.list.filter((item) =>response.data.list.indexOf(item) % 8 === 0)
                commit('setForecast', forecast)
            } catch (error) {
                this.state.error = true

            } finally {
                setTimeout(() => {
                    this.state.forecastLoading = false
                }, 3000);
            }

        },
    }

})
