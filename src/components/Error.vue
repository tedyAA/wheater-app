<template>
  <div>
    <p class="text-ups">Uuupsss!</p>
    <p class="text-wrong">Something went wrong</p>
    <img src="../assets/cloud-sad.png" class="moving-image"/>
  </div>
</template>
<script>
export default {
  name: 'Error',
}
</script>
<style>
.moving-image {
  position: relative; /* needed for left/right movement */
  animation: moveLeftRight 3s ease-in-out infinite alternate;
  width: 250px;
}

@keyframes moveLeftRight {
  0% {
    left: 0;
  }
  50% {
    left: 50px; /* move 50px to the right */
  }
  100% {
    left: 0; /* back to start */
  }
}
.text-ups{
  color: white;
  font-size: 50px;
  font-weight: bold;
}
.text-wrong{
  color: white;
  font-size: 60px;
  font-weight: bold;
}
</style>
