<template>
  <div>
    <nav-bar/>
    <div class="header">
      <img src="../../assets/news-header.png" alt="" width="900" height="600"/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-4 mt-2 mb-2" v-for="(item,index) in newsToShow" :key="index">
          <router-link :to="'/news/' + item.source.name">
            <NewsCard :news="item" class="is-clickable"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";
import NewsCard from "@/components/NewsCard.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'News',
  components: {NavBar, NewsCard},
  computed:{
    ...mapState({
      news: (state) => state.news
    }),
    newsToShow(){
      const news = this.news.articles
      for (let i = news.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [news[i], news[j]] = [news[j], news[i]];
      }
      return news
    }
  },
}
</script>
<style scoped>
.header{
 background-color: #568bc2;
}
</style>
