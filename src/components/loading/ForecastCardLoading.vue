<template>
  <div class="skeleton-grid">
    <div class="skeleton-card">
      <div class="skeleton-line short"></div>
      <div class="skeleton-line square"></div>
      <div class="skeleton-line medium"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForecastCardLoading",
};
</script>

<style scoped>
.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 10px;
}

@media (min-width: 640px) {
  .skeleton-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .skeleton-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

.skeleton-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e7eb; /* gray-200 */
  padding: 1rem;
  border-radius: 0.5rem;
  animation: pulse 1.5s infinite ease-in-out;
  gap: 1rem;
}

.skeleton-line {
  background-color: #d1d5db; /* gray-300 */
  border-radius: 0.25rem;
}

.skeleton-line.short {
  height: 1rem;
  width: 75%;
}

.skeleton-line.square {
  height: 8rem;
  width: 8rem;
}
@media (max-width: 640px) {
  .skeleton-line.square {
    height: 6rem;
    width: 6rem;
  }
}

.skeleton-line.medium {
  height: 1rem;
  width: 66%;
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
