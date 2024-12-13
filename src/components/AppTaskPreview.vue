<script setup>
import { useRouter } from 'vue-router';
import { useTasksStore } from '../stores/tasks';

const taskStore = useTasksStore();
const router = useRouter();
const props = defineProps(['id']);
const task = taskStore.tasks.find((task) => task.id === props.id);

function browseTask() {
  router.push(`/tasks/${props.id}`);
}

function deleteTask() {
  taskStore.deleteFromDb(task.id);
}
</script>

<template>
  <div class="card">
    <h2 class="title_large">{{ task.title }}</h2>
    <hr />
    <span class="title">{{ task.deadline }}</span>
    <div class="card__btns">
      <button @click="browseTask" class="btn">Browse</button>
      <button @click="deleteTask" class="btn btn_сremekhaki">Delete</button>
    </div>
    <span class="card__status" :class="task.status.toLowerCase()">{{ task.status }}</span>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  &__status {
    padding: 5px 10px;
    position: absolute;
    top: 20px;
    right: 20px;
    border: 1px solid #000;
    border-radius: 10px;
  }
  &__btns {
    display: flex;
    gap: 10px;
  }
}

.active {
  background-color: #fff;
  color: darkblue;
  border: 1px solid darkblue;
}

.completed {
  background-color: darkblue;
  color: #fff;
}

.cancelled {
  background-color: darkred;
  color: #fff;
}
</style>
