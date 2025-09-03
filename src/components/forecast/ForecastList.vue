<template>
<div v-if="hasForecast" class="row">
  <div v-for="(item, index) in forecast" :key="index" class="col">
    <ForecastCard :forecast="item" />
  </div>
</div>
</template>
<script>
import {isEmpty} from "lodash";
import ForecastCard from "@/components/forecast/ForecastCard.vue";

export default {
  name: 'ForecastList',
  components: {ForecastCard},
  props:{
    forecast:{type:Array,required:true}
  },
  computed:{
    hasForecast() {
      return !isEmpty(this.forecast)
    }
  }
}
</script>
