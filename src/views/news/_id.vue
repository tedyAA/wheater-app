<template>
  <div class="wrapper">
    <div class="container mt-50">
      <div class="has-text-centered">
        <img :src="newsImg" class="mt-5 news-image"/>
      </div>
      <div class="text-left mt-50">
        <p class="creator" v-if="hasCreator">Creator: {{ news.creator[0] }}</p>
        <p class="title">{{ news.title }}</p>
        <p class="content">{{ news.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import {isEmpty} from "lodash";
export default {
  name:'newsPage',
  data() {
    return {
      news: {},
    };
  },
  computed:{
    hasCreator(){
      return !isEmpty(this.news.creator)
    },
    newsImg(){
      if(isEmpty(this.news.image_url)){
        return require("../../assets/placeholder-img.png");
      }else{
        return this.news.image_url
      }
  }
  },
  created() {
    const id = this.$route.params.id;
    this.news = this.$store.state.news.find((item) => item.article_id === id);
  },
}
</script>
<style scoped>
.creator{
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
}
.title{
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
}
.content{
  font-size: 18px;
  margin-top: 5px;
}
.wrapper{
  background-image: url("../../assets/news-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.container{
  padding-top: 50px;
}
.news-image{
  max-width: 1000px;
}
</style>
