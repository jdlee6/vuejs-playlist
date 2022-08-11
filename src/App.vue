<template>
  <div>
    <!-- <form-one></form-one> -->
    <!-- <form-two></form-two> -->

    <!-- keep-alive tag to retain state within component -->
    <!-- Vue tag to display dynamic components -->
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show Form 1</button>
    <button v-on:click="component = 'form-two'">Show Form 2</button>
  </div>
</template>

<script>
// import formHelper from './components/FormHelper.vue';
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
  components: {
    // 'form-helper': formHelper
    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
      // title: 'I am dynamic slot title'
      // We can dynamically change the component 
      // by changing this state here
      component: 'form-one'
    }
  },
  methods: {
  },
}
</script>

<style scoped>
h1 {
  color: lightblue;
}
</style>
