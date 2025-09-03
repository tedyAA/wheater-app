<template>
    <div class="row justify-content-center">
      <div class="col-6 col-md-2">
        <ForecastCardLoading/>
      </div>
      <div class="col-6 col-md-2">
        <ForecastCardLoading/>
      </div>
      <div class="col-6 col-md-2">
        <ForecastCardLoading/>
      </div>
      <div class="col-6 col-md-2">
        <ForecastCardLoading/>
      </div>
      <div class="col-6 col-md-2">
        <ForecastCardLoading/>
      </div>
    </div>
</template>
<script>
import ForecastCardLoading from "@/components/loading/ForecastCardLoading.vue";

export default {
  name: "ForecastListLoading",
  components: {ForecastCardLoading},
}
</script>
