<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <!-- pass props w/ v-bind: -->
    <app-fruits v-bind:fruits="fruits"></app-fruits>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Fruits from './components/Fruits.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-fruits': Fruits
  },
  data() {
    return {
      title: 'Vue Fruits',
      fruits: [
        { name: 'apple', color: 'red', show: false },
        { name: 'banana', color: 'yellow', show: false },
        { name: 'avocado', color: 'green', show: false },
        { name: 'strawberry', color: 'red', show: false },
      ]
    }
  },
}
</script>

<style scoped>
h1 {
  color: lightblue;
}
</style>
