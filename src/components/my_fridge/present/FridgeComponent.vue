<template>
  <div>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title class="title">
          <div>
            <h3 class="mat-h2 mb-0">Todo List</h3>
          </div>
        </v-card-title>
        <v-card-text>
          <TodoItem v-for="(todo, index) in todos"
                    :key="index"
                    :todo="todo">
          </TodoItem>
          <InputField ref="inputFeild"></InputField>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="addTodo">Save Item</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'FridgeComponent',
  data() {
    return {
      items: [
        { name: 'Item 1', quantity: 1 },
        { name: 'Item 2', quantity: 2 },
        // Add more items for testing as needed
      ],
      newItemName: '',
      newItemQuantity: 0
    }
  },
  methods: {
    addItem() {
      if (this.newItemName && this.newItemQuantity > 0) {
        this.items.push({ name: this.newItemName, quantity: this.newItemQuantity });
        this.newItemName = '';
        this.newItemQuantity = 0;
      }
    }
  }
}
</script>

<style scoped>
/* Add any styles you need here */
</style>
