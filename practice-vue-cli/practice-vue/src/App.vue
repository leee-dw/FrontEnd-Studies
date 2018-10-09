<template>
  <div id="app">
    <HelloWorld/>
    <Slider/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Slider from './components/Slider'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Slider
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
