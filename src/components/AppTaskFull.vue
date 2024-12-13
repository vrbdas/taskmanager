<script setup>
import { computed } from 'vue';
import { useTasksStore } from '../stores/tasks';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const taskStore = useTasksStore();
const route = useRoute();
let task = computed(() => taskStore.tasks.find((item) => item.id == route.params.id)); 

async function changeStatus(newStatus) {
  task.value.status = newStatus;
  await taskStore.reWriteToDb(task.value);
}
</script>

<template>
  <button @click="router.push('/tasks')" class="btn btn_back">
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"
        fill="#ffffff"
      />
    </svg>
  </button>
  <div v-if="task" class="card">
    <h2 class="title_large">{{ task.title }}</h2>
    <hr />
    <div>
      <span class="italic">Status: </span
      ><span class="card__status" :class="task.status.toLowerCase()">{{ task.status }}</span>
    </div>
    <div>
      <span class="italic">Deadline: </span><span class="title">{{ task.deadline }}</span>
    </div>
    <p><span class="italic">Description:</span> {{ task.descr }}</p>
    <div class="card__btns">
      <button @click="changeStatus('active')" class="btn active">Take to work</button>
      <button @click="changeStatus('completed')" class="btn complete">Complete</button>
      <button @click="changeStatus('cancelled')" class="btn cancelled">Cancel</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.btn_back {
  padding: 0 20px;
}

.card {
  &__status {
    width: fit-content;
    padding: 5px 10px;
    border: 1px solid #000;
    border-radius: 10px;
  }
  &__btns {
    display: flex;
    gap: 10px;
  }
}

.italic {
  font-style: italic;
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
