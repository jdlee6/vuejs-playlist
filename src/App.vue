<template>
  <div>
    <app-header></app-header>
    <app-fruits></app-fruits>
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
      title: "Fruit App"
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
