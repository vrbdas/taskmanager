<script setup></script>

<template>
  <div class="card">
    <h1 class="title_xlarge home__title">
      <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" fill="#ecf0f1" fill-opacity="0.24"/>
        <path d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5" stroke="#2c3e50" stroke-width="1.2" stroke-linecap="round"/>
        <path d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667" stroke="#2c3e50" stroke-width="1.2" stroke-linecap="round"/>
      </svg>
      Welcome to Task Manager
    </h1>
    <p>
      The Task Manager is a user-friendly web application designed to help individuals and teams
      manage their tasks efficiently. With this app, users can:
    </p>
    <ul>
      <li>
        <strong>Create Tasks:</strong> Add new tasks with relevant details to keep track of your
        to-do list.
      </li>
      <li>
        <strong>Change Task Status:</strong> Seamlessly update task statuses to "Completed," "In
        Progress," or "Cancelled" as needed.
      </li>
      <li>
        <strong>Delete Tasks:</strong> Remove tasks that are no longer relevant or required with a
        single click.
      </li>
    </ul>
    <p>
      This application is perfect for maintaining productivity, organizing workflows, and staying on
      top of your responsibilities. Designed with simplicity and functionality in mind, it ensures
      an effortless task management experience for everyone.
    </p>
    <div class="home__links">
      <RouterLink to="/tasks" class="title home__link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
          <rect
            x="3"
            y="5"
            width="18"
            height="2"
            rx="1"
            fill="#2c3e50"
            stroke="#ecf0f1"
            stroke-width="0.5"
          />
          <rect
            x="3"
            y="11"
            width="14"
            height="2"
            rx="1"
            fill="#2c3e50"
            stroke="#ecf0f1"
            stroke-width="0.5"
          />
          <rect
            x="3"
            y="17"
            width="10"
            height="2"
            rx="1"
            fill="#2c3e50"
            stroke="#ecf0f1"
            stroke-width="0.5"
          />
        </svg>
        Tasks
      </RouterLink>
      <RouterLink to="/create" class="title title_fsl home__link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
          <circle cx="12" cy="12" r="10" fill="#ecf0f1" stroke="#2c3e50" stroke-width="2" />
          <line
            x1="12"
            y1="8"
            x2="12"
            y2="16"
            stroke="#2c3e50"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="8"
            y1="12"
            x2="16"
            y2="12"
            stroke="#2c3e50"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        Create task
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  &__title {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  &__links {
    display: flex;
    gap: 20px;
  }
  &__link {
    display: flex;
    align-items: center;
    gap: 5px;
    width: fit-content;
  }
}
</style>
