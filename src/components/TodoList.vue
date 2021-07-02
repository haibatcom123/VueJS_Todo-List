<template>
  <ul class="tasks">
    <li
      v-for="todo in todos"
      :key="todo.id"
      :class="{ completed: todo.completed }"
      class="task"
      @click="toggleTodo(todo.id)"
    >
      {{ todo.task }}
      <span class="delete" @click="deleteTodo(todo.id)">ⓧ</span>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
  methods: {
    toggleTodo: function(id) {
      this.$store.dispatch("toggleTodo", id);
    },
    deleteTodo: function(id) {
      this.$store.dispatch("deleteTodo", id);
    }
  }
};
</script>

<style>
.tasks {
  padding: 0;
  list-style-type: none;
}

.task {
  padding: 10px;
  margin-bottom: 0.5rem;
  border: 0.5px solid #999;
  border-radius: 5px;
  color: #34495e;
  font-weight: bold;
}

.task:before {
  content: "\2002";
}

.task:hover {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #41b883;
}

.completed:before {
  content: "\2714";
}

.delete {
  display: block;
  float: right;
  color: #d22;
  width: 1.25rem;
  height: 1.25rem;
  text-align: center;
}
</style>
