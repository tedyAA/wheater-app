<template>
  <div>
    <NavBar/>
    <div class="container text-left">
      <img :src="newsImg" width="800" height="400"  class="mt-5"/>
      <p class="author" v-if="hasAuthor">Author: {{ news.author }}</p>
      <p class="title">{{ news.title }}</p>
      <p class="content">{{ news.description }}</p>
      <p class="content">{{ news.content }}</p>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import {isEmpty} from "lodash";
export default {
  name:'newsPage',
  components:{
    NavBar
  },
  data() {
    return {
      news: {},
    };
  },
  computed:{
    hasAuthor(){
      return !isEmpty(this.news.author)
    },
    newsImg(){
      if(isEmpty(this.news.urlToImage)){
        return require("../../assets/placeholder-img.png");
      }else{
        return this.news.urlToImage
      }
  }
  },
  created() {
    const id = this.$route.params.id;
    this.news = this.$store.state.news.articles.find((item) => item.source.name === id);
  },
}
</script>
<style scoped>
.author{
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
</style>
