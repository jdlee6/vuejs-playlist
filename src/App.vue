<template>
  <div>
    <!-- pass down html templates as 'slots' -->
    <!-- 1. define what html to pass down -->
    <form-helper>
      <!-- name slots -->
      <!-- <h2 slot="title">{{ title }}</h2> -->
      <!-- <p slot="text">I am the slot description</p> -->
      <div slot="form-header">
        <h3>This is the title of the form</h3>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" />
        <input type="password" placeholder="password" password />
      </div>

      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/FormHelper.vue';

export default {
  components: {
    'form-helper': formHelper
  },
  data() {
    return {
      title: 'I am dynamic slot title'
    }
  },
  methods: {
    handleSubmit() {
      console.log('submitted!')
    }
  },
}
</script>

<style scoped>
h1 {
  color: lightblue;
}
</style>
