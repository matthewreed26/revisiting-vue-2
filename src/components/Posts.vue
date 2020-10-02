<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id">
      <Post :post="post" />
      <br />
    </div>
  </div>
</template>

<script>
import Post from './Post.vue';
import axios from 'axios';

export default {
  name: 'Posts',
  components: {
    Post
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    // need to map the response data with "liked" before it goes into the Post component for dynamic styling
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.posts = res.data.map(post => {return {...post, "liked": false}}))
      .catch(err => console.log(err));
  }
}
</script>

<style scoped>
</style>
