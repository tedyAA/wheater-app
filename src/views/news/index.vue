<template>
  <div class="wrapper">
    <div class="header">
      <img src="../../assets/news-header.png" alt="" class="header-image"/>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
        <div class="col mt-2 mb-2" v-for="(item,index) in newsToShow" :key="index">
          <NewsCard :news="item" class="is-clickable"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";
import NewsCard from "@/components/NewsCard.vue";

export default {
  name: 'News',
  components: {NewsCard},
  computed:{
    ...mapState({
      news: (state) => state.news
    }),
    newsToShow(){
      const news = this.news
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
  padding-top: 50px;
}
.header-image{
  width: 600px;
  @media  screen and (max-width: 500px) {
    width: 200px;
  }
}
.wrapper{
  background-image: url("../../assets/news-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
