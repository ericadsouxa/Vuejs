<template>
    <div>
      <h1 class="red-text">Fantasy Games</h1>
      <h4>Reactive Table</h4>
      
      <table border="1">
        <thead>
          <tr>
            <th>Name of the Player</th>
            <th>Match</th>
            <th>Sponsors Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.Match }}</td>
            <td>{{ item.Amount.toFixed(2) }}</td>
            <td>{{ (item.Match * item.Amount).toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
      
      <div>
        <h2>Computed Values</h2>
        <p>Total Matches: {{ totalMatches }}</p>
        <p>Total Budget: ${{ totalBudget.toFixed(2) }}</p>
      </div>
  
      <div>
        <h2>Add New Details</h2>
        <input v-model="newItem.name" placeholder="Name" />
        <input v-model.number="newItem.Match" type="number" placeholder="Match" />
        <input v-model.number="newItem.Amount" type="number" step="0.01" placeholder="Amount" />
        <button @click="addItem">Add Details</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const tableData = ref([
    { name: 'ABC', Match: 2, Amount: 10.00 },
    { name: 'XYZ', Match: 1, Amount: 20.00 },
  ]);
  
  const newItem = ref({
    name: '',
    Match: 0,
    Amount: 0.00,
  });
  
  const addItem = () => {
    if (newItem.value.name && newItem.value.Match > 0 && newItem.value.Amount >= 0) {
      tableData.value.push({ ...newItem.value });
      newItem.value = { name: '', Match: 0, Amount: 0.00 };
    } else {
      alert('Please fill out all fields correctly.');
    }
  };
  
  const totalMatches = computed(() => {
    return tableData.value.reduce((sum, item) => sum + item.Match, 0);
  });
  
  const totalBudget = computed(() => {
    return tableData.value.reduce((sum, item) => sum + item.Match * item.Amount, 0);
  });
  </script>
  
  <style scoped>
  .red-text {
    color: red;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
  }
  </style>
  