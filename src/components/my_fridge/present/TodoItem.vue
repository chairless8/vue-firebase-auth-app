<template>
  <div class="todo-item">
    <input type="text" 
           v-model="editedTitle" 
           @blur="editingCompleted" 
           @keydown.enter.prevent="editingCompleted" 
           :readonly="isReadOnly" 
           :class="{ 'is-done': todo.done }"
    >
    {{ todo }}
    <button @click="edit">Edit</button>
    <button @click="toggleTodo">Toggle Done</button>
    <button @click="deleteTodo">Delete</button>
  </div>
  <button @click="addTodo">Add Todo</button>
</template>

<script>
import { mapActions } from 'vuex'
import { useTodosStore } from '@/stores/todos'


export default {
  name: 'TodoItem',
  props: ['todo'],
  data () {
    return {
      isReadOnly: true,
      editedTitle: ''
    }
  },
  setup() {
    const todosStore = useTodosStore()

    // Ahora puedes acceder al estado y las acciones del store
    console.log(todosStore.todos)
    let myTodo = { title: 'Old Title', done: false };
    let newTitle = 'New Title';

    todosStore.editTodo(myTodo, newTitle);

    function addTodo() {
      // Aquí puedes definir la lógica para agregar un nuevo todo.
      // Por ejemplo, podrías abrir un modal que permita al usuario introducir el título del nuevo todo.
      const newTodo = {
        title: 'New Todo',
        done: false
      }
      todosStore.addTodo(newTodo)
    }

    return {
      addTodo
    }
  },
  created() {
    this.editedTitle = this.todo.title
  },
  methods: {
    ...mapActions([
      'editTodo',
      'toggleTodo',
      'deleteTodo'
    ]),
    edit () {
      this.isReadOnly = false
    },
    editingCompleted () {
      if (this.editedTitle.trim().length > 0) {
        this.editTodo({ todo: this.todo, title: this.editedTitle })
        this.isReadOnly = true
      }
    }
  }
}
</script>

<style scoped>
.is-done {
  text-decoration: line-through;
}
</style>
