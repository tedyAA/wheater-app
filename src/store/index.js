import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: () => ({
        weather: {},
        currentWeather: {},
        weather_api_key: '1cf838aa8644549473bdf55ad4147ca1',
        weather_url_base: 'https://api.openweathermap.org/data/2.5/',

    }),
    mutations: {
        setWeather(state, results) {
            state.weather = results
        },
        setCurrentWeather(state, results) {
            state.currentWeather = results.list[0]
        }
    },
    actions: {
        async fetchWeather({commit}, query) {
            const response = await axios.get(`${this.state.weather_url_base}forecast?q=${query}&appid=${this.state.weather_api_key}`)
            commit('setWeather', response.data)
            commit('setCurrentWeather', response.data)
        },
    }

})
