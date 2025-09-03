<template>
  <div>
    <ForecastListLoading v-if="forecastLoading"/>
    <div v-if="hasForecast && !forecastLoading" class="row">
      <div v-for="(item, index) in forecast" :key="index" class="col">
        <ForecastCard :forecast="item" />
      </div>
    </div>
  </div>
</template>
<script>
import {isEmpty} from "lodash";
import ForecastCard from "@/components/forecast/ForecastCard.vue";
import {mapState} from "vuex";
import ForecastListLoading from "@/components/loading/ForecastListLoading.vue";

export default {
  name: 'ForecastList',
  components: {ForecastListLoading, ForecastCard},
  props:{
    forecast:{type:Array,required:true}
  },
  computed:{
    ...mapState({
      forecastLoading: (state) => state.forecastLoading,
    }),
    hasForecast() {
      return !isEmpty(this.forecast)
    }
  }
}
</script>
