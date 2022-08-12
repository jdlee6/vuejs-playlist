<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <!-- lazy modifier shows text when user moves on to next field -->
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model="blog.content"></textarea>

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

      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>

      <button v-on:click.prevent="post">Add Blog</button>
    </form>

    <div v-if="submitted">
      Thanks for adding your post
    </div>

    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog fruits:</p>
      <ul>
        <li v-for="fruit in blog.fruits">
          {{ fruit }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // blog obj. stores all related fields
      blog: {
        title: '',
        content: '',
        fruits: [],
        author: ''
      },
      authors: ['Joe', 'Joey', 'Joseph'],
      submitted: false,
    }
  },
  methods: {
    post() {
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then((data) => {
        console.log(data);
        this.submitted = true;
      })
    }
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