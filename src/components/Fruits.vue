<template>
  <div id="fruits">
    <ul>
      <li v-for="fruit in fruits" v-on:click="fruit.show = !fruit.show">
        <h2>{{ fruit.name }}</h2>
        <h3 v-show="fruit.show">{{ fruit.color }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
#fruits {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
