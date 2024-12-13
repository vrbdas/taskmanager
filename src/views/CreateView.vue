<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { onBeforeRouteLeave } from 'vue-router';
import { useTasksStore } from '../stores/tasks';

const taskStore = useTasksStore();
const router = useRouter();
const titleInput = ref('');
const deadlineInput = ref('');
const descrInput = ref('');
const isTaskCreated = ref(false);

const isFormValid = computed(() => {
  return titleInput.value && deadlineInput.value && descrInput.value ? true : false;
});

function formSubmit() {
  if (isFormValid.value) {
    const newTask = {
      title: titleInput.value,
      deadline: deadlineInput.value,
      descr: descrInput.value,
      status: statusByDate(),
    };
    taskStore.writeToDb(newTask);
    clearForm();
    router.push('/tasks');
  }
}

function clearForm() {
  titleInput.value = '';
  deadlineInput.value = '';
  descrInput.value = '';
  isTaskCreated.value = true;
}

function statusByDate() {
  const currentDate = new Date().setHours(0, 0, 0, 0); // текущая дата без времени
  const deadlineDate = new Date(deadlineInput.value); // дата из input
  if (deadlineDate >= currentDate) {
    return 'active';
  } else return 'cancelled';
}

onBeforeRouteLeave(() => {
  if (!isTaskCreated.value) {
    return confirm('Do you want to leave without create task?');
  }
  return true;
});
</script>

<template>
  <div class="card">
    <h2 class="title_large">Create new task</h2>
    <form @submit.prevent="formSubmit">
      <label>
        Task title:
        <input v-model="titleInput" type="text" />
      </label>
      <label>
        Deadline date:
        <input v-model="deadlineInput" type="date" />
      </label>
      <label>
        Description:
        <textarea v-model="descrInput" rows="4"></textarea>
      </label>
      <button :disabled="!isFormValid" type="submit" class="btn">Create</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  textarea {
    resize: vertical;
  }
}

.error {
  color: red;
}
</style>
