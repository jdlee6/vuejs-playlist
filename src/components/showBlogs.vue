<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2>{{ blog.title | to-uppercase }}</h2>
      <article v-rainbow>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
// Mixins are a chunk of code we can re use over and over again
// Example: custom search filter shared amongst different components
import searchMixin from '../mixins/searchMixin';

export default {
  components: {
  },
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {
  },

  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
      console.log(data);
      this.blogs = data.body;
    })
  },

  computed: {
  },
  // registering filters locally
  filters: {
    // 'to-uppercase'(value) {
    //   return value.toUpperCase();
    // }
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style scoped>

</style>
