import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore('taskStore', () => {
  const tasks = ref([]);

  const activeTasks = computed(() => tasks.value.filter((task) => task.status == 'active'));
  const notActiveTasks = computed(() => tasks.value.filter((task) => task.status != 'active'));

  async function readFromDb() {
    const response = await fetch(
      'https://vue-courseworkthree-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
      {
        method: 'GET',
      }
    );
    const databaseData = (await response.json()) ?? {};
    const res = Object.keys(databaseData).map((key) => {
      return {
        id: key,
        ...databaseData[key],
      };
    });
    tasks.value = res;
  }

  async function writeToDb(task) {
    const response = await fetch(
      'https://vue-courseworkthree-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      }
    );
    readFromDb();
  }

  async function reWriteToDb(task) {
    const response = await fetch(
      `https://vue-courseworkthree-default-rtdb.europe-west1.firebasedatabase.app/tasks/${task.id}.json`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      }
    );
    readFromDb();
  }

  async function deleteFromDb(id) {
    const response = await fetch(
      `https://vue-courseworkthree-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`,
      {
        method: 'DELETE',
      }
    );
    readFromDb();
  }

  return { tasks, activeTasks, notActiveTasks, writeToDb, readFromDb, deleteFromDb, reWriteToDb };
});
