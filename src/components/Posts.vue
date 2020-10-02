<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id">
      <Post :post="post" @post-liked="markLiked" />
      <br />
    </div>
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
  name: 'Posts',
  components: {
    Post
  },
  props: [
    'posts'
  ],
  methods: {
    markLiked(e) {
      e.liked = !e.liked;
    }
  }
}
</script>
