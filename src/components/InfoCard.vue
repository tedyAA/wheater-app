
<template>
<div>
  <div class="weather-info text-white">
    <div class="row ml-5 mr-5">
      <div class="col-6">
        <p>RealFeel</p>
      </div>
      <div class="col-6">
        <p>RealFeel Shade™</p>
      </div>
      <div class="col-6">
        <p>Max UV Index</p>
      </div>
      <div class="col-6">
        <p>Wind</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:'InfoCard'
}
</script>
<style>
.weather-info{
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 18px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  height: 100%;
}
</style>
