<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from '../main';

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
      // this.title = "Vue Fruits Title Change!"
      // can emit a event to change OG state in ALL components
      // this.$emit('changeTitle', 'Vue Fruits Title Change!');

      // change state in this component locally
      // this.title = 'Vue Fruits Title Changed'
      // then emit event via bus
      bus.$emit('titleChanged', 'Vue Fruits Title Changed Two')
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
