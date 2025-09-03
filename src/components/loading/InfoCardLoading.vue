<template>
  <div class="skeleton-table">
    <div class="column">
      <div class="skeleton-row"></div>
      <div class="skeleton-row"></div>
      <div class="skeleton-row"></div>
    </div>
    <div class="column">
      <div class="skeleton-row"></div>
      <div class="skeleton-row"></div>
      <div class="skeleton-row"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableSkeleton",
};
</script>

<style scoped>
.skeleton-table {
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin: 1rem auto;
  gap: 2rem;
  background-color: #d1d5db;
  border-radius: 1rem;
  padding: 2rem;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.skeleton-row {
  height: 20px;
  width: 100%;
  background-color: #9ca3af;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
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
