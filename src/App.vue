<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs
  },
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
}
</style>
