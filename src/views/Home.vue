<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AddPost @add-post="addPost" />
    <Posts :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue';
import AddPost from '@/components/AddPost.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Posts,
    AddPost
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    // need to map the response data with "liked" before it goes into the Post component for dynamic styling
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => this.posts = res.data.map(post => {return {...post, "liked": false}}))
      .catch(err => console.log(err));
  },
  methods: {
    addPost(newPost) {
    // need to map the response data with "liked" before it goes into the Post component for dynamic styling
    axios.post('https://jsonplaceholder.typicode.com/posts?_limit=5', newPost)
      .then(() => this.posts = [newPost, ...this.posts])
      .catch(err => console.log(err));
    }
  }
}
</script>
