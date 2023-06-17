// src/stores/todos.js
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: []
  }),
  actions: {
    editTodo(todo, title) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].title = title;
    },
    toggleTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = !this.todos[todoIndex].done;
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    }
  }
})
