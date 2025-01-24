<template>
  <div class="card mt-5 h-100">
    <img :src="newsImg"  class="card-img-top" width="200" height="200"/>
    <div class="card-body text-left">
    <p>{{dateBuilder}}</p>
    <p>{{news.title}}</p>
    </div>
  </div>
</template>
<script>
import {isEmpty} from "lodash";

export default {
  name: 'NewsCard',
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
    },
    dateBuilder() {
      let d = new Date(this.news.publishedAt);
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear()
      return `${day} ${date} ${month} ${year}`;
    },
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
