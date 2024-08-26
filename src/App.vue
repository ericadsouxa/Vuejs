<template>
  <div id="app">
    <HelloWorld />
    <MyCounter />
    <displaydate />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MyCounter from './components/MyCounter.vue';
import displaydate from './components/displaydate.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
