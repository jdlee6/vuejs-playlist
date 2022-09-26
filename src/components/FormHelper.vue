<template>
  <div>
    <!-- <slot name="title"></slot> -->
    <!-- <h1>I am the form helper</h1> -->
    <!-- 2. render html children w/ slot tags -->
    <!-- <slot name="text"></slot> -->

    <h1>Fill out form here</h1>
    <form>

      <div id="form-header">
        <slot name="form-header"></slot>
      </div>

      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>

      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>

      <div id="useful-links">
        <ul>
          <li>
            <a href="">Link 1</a>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
          </li>
        </ul>
      </div>

    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style scoped>
h1 {
  color: lightblue;
  text-align: center;
}

form {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

#useful-links ul {
  padding: 0;
}

#useful-links li {
  display: inline-block;
  margin-right: 10px;
}

form>div {
  padding: 20px;
  background: #eee;
  margin: 20px 0;
}

#form-header {
  background: #ddd;
  border: 1px solid #bbb;
}
</style>
