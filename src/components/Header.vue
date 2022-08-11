<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    changeTitle() {
      // changes the state in this component locally ONLY
      this.title = "Vue Fruits Title Change!"
    }
  }
}
</script>

<style scoped>
header {
  background: lightcoral;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
