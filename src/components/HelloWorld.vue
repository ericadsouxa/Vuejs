<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  methods: {
    changeMessage() {
      this.message = 'You clicked the button!';
    }
  }
};
</script>

<style scoped>
.hello {
  text-align: center;
  margin-top: 60px;
}
</style>
