<script setup>
import AppTaskPreview from '../components/AppTaskPreview.vue';
import { useTasksStore } from '../stores/tasks';
import { onMounted } from 'vue';

const taskStore = useTasksStore();

onMounted(() => taskStore.readFromDb());
</script>

<template>
  <div v-if="taskStore.tasks.length > 0" class="tasks-list">
    <h2 class="title">Total active tasks: {{ taskStore.activeTasks.length }}</h2>
    <AppTaskPreview v-for="task in taskStore.activeTasks" :key="task.id" :id="task.id" />
    <AppTaskPreview v-for="task in taskStore.notActiveTasks" :key="task.id" :id="task.id" />
    <RouterLink to="/create">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
        <circle cx="12" cy="12" r="10" fill="#2c3e50" stroke="#ecf0f1" stroke-width="2" />
        <line
          x1="12"
          y1="8"
          x2="12"
          y2="16"
          stroke="#ecf0f1"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="8"
          y1="12"
          x2="16"
          y2="12"
          stroke="#ecf0f1"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </RouterLink>
  </div>
  <div v-else>
    <div class="card">
      <h2 class="title_large">No tasks</h2>
      <button @click="$router.push('/create')" class="btn">Create task</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #fff;
}

.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
