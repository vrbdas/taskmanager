import { createWebHistory, createRouter } from "vue-router";
import HomeView from './views/HomeView.vue';
import CreateView from './views/CreateView.vue';
import TasksView from './views/TasksView.vue';
import AppTasksList from "./components/AppTasksList.vue";
import AppTaskFull from "./components/AppTaskFull.vue";
import NotFoundView from "./views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory('/taskmanager/'),
  routes: [
    {
      path: '/home',
      component: HomeView,
      alias: '/',
    },
    {
      path: '/create',
      component: CreateView,
    },
    {
      path: '/tasks',
      component: TasksView,
      children: [
        {
          path: ':id',
          component: AppTaskFull,
        },
        {
          path: '',
          component: AppTasksList,
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*', // несуществующий маршрут, можно перенаправить на существующий: redirect: '/login', или на свою страницу 404. вместо pathMatch можно указать другое имя или без имени '/:(.*)*'
      component: NotFoundView,
    },
  ]
})

export default router;