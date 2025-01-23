<template>
  <div class="search-box mt-5">
    <input type="text"
           class="search-bar"
           placeholder="Search..."
           v-model="query"
           @keyup.enter="$emit('fetchWeather',query)"
    />
    <button class="btn btn-success mt-2" @click="$emit('fetchWeather',query)" >Search</button>
  </div>
</template>
<script>
export default {
  name:'Searchbox',
  data(){
    return{
      query: ''
    }
  }
}
</script>
<style scoped>
.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
</style>
