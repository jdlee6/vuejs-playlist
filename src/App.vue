<template>
  <div>
    <app-header></app-header>
    <!-- pass props w/ v-bind: -->
    <app-fruits v-bind:fruits="fruits"></app-fruits>
    <app-footer></app-footer>
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
/* tags to every h1 on the page w/o 'scoped' attr. */
h1 {
  color: lightblue;
}
</style>
