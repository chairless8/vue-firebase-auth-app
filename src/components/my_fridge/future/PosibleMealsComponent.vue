<template>
  <div>
    <h1>My List</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.name }}: {{ item.quantity }}
      </li>
    </ul>
    <div>
      <input v-model="newItemName" placeholder="Item Name" />
      <input v-model="newItemQuantity" placeholder="Quantity" type="number" />
      <button @click="addItem">Add Item</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PosibleMealsComponent',
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
