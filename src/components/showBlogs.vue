<template>
  <!-- directives & arguments -->
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog">
      <h2 v-rainbow>{{ blog.title }}</h2>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      blogs: []
    }
  },
  methods: {

  },

  // fired when component is created
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
      console.log(data);
      this.blogs = data.body;
    })
  }
}
</script>

<style scoped>

</style>
