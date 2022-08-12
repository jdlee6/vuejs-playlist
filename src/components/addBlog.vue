<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form>
      <label>Blog Title:</label>
      <!-- lazy modifier shows text when user moves on to next field -->
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model="blog.content"></textarea>
    </form>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="fruit in blog.fruits">
          {{ fruit }}
        </li>
      </ul>
    </div>

    <div id="checkboxes">
      <label>Apples</label>
      <input type="checkbox" value="apples" v-model="blog.fruits" />
      <label>Grapes</label>
      <input type="checkbox" value="grapes" v-model="blog.fruits" />
      <label>Oranges</label>
      <input type="checkbox" value="oranges" v-model="blog.fruits" />
      <label>Mangoes</label>
      <input type="checkbox" value="mangoes" v-model="blog.fruits" />
    </div>
  </div>
</template>

<script>
// Imports
export default {
  data() {
    return {
      // blog obj. stores all related fields
      blog: {
        title: '',
        content: '',
        fruits: []
      }
    }
  },
  methods: {
  }
}
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
</style>