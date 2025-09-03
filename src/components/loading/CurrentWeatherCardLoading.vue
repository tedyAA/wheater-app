<template>
  <div class="skeleton-container">
    <div class="skeleton-header">
      <div class="skeleton-line short"></div>
      <div class="skeleton-line shorter"></div>
    </div>

    <div class="skeleton-card">
      <div class="skeleton-line card-line"></div>
      <div class="skeleton-line card-subline"></div>
    </div>

    <div class="skeleton-footer">
      <div class="skeleton-line footer-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentWeatherCardLoading",
};
</script>

<style scoped>
.skeleton-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
}

.skeleton-header,
.skeleton-footer {
  width: 100%;
  max-width: 24rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skeleton-card {
  width: 100%;
  max-width: 24rem;
  height: 10rem;
  background-color: #d1d5db;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}

.skeleton-line {
  height: 1rem;
  background-color: #d1d5db;
  border-radius: 0.25rem;
  animation: pulse 1.5s infinite ease-in-out;
}

.short {
  width: 66%;
  margin: 0 auto;
}

.shorter {
  width: 50%;
  margin: 0 auto;
}

.card-line {
  width: 66%;
  background-color: #9ca3af;
}

.card-subline {
  width: 50%;
  height: 1rem;
  background-color: #9ca3af;
}

.footer-line {
  width: 83%;
  margin: 0 auto;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
</style>
