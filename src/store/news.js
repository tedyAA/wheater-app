import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: () => ({
        news: {},
        news_api_key: 'd9361f93c29b4198871b33a407634fdf',
        news_url_base: 'https://newsapi.org/v2/top-headlines',

    }),
    mutations: {
        setNews(state, results) {
            state.news = results
        },
    },
    actions: {
        async fetchNews({commit}) {
            const response = await axios.get(`${this.state.news_url_base}?country=us&apiKey=${this.state.news_api_key}`)
            commit('setNews', response.data)
        }
    }

})
