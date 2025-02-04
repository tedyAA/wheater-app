<template>
  <router-link :to="'/news/' + news.source.name">
  <div class="card mt-5 h-100">
    <img :src="newsImg"  class="card-img-top" width="200" height="200"/>
    <div class="card-body text-left">
    <p>{{dateBuilderDD(news.publishedAt)}}</p>
    <p>{{news.title}}</p>
    </div>
  </div>
  </router-link>
</template>
<script>
import {isEmpty} from "lodash";
import {dateBuilderDD} from "@/helpers";

export default {
  name: 'NewsCard',
  methods: {dateBuilderDD},
  props:{
    news:{type:Object,required:true}
  },
  computed:{
    newsImg(){
      if(isEmpty(this.news.urlToImage)){
        return require("../assets/placeholder-img.png");
      }else{
        return this.news.urlToImage
      }
    }
  }
}
</script>
<style>
.card{
  display: inline-block;
  color: #FFF;
  font-size: 14px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgb(107 107 107 / 60%);
  border-radius: 16px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.card-img-top{
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
</style>
