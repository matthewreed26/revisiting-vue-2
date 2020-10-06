<template>
  <div class="posts">
    <div v-for="post in allPosts" :key="post.id">
      <Post :post="post" @post-liked="markLiked" />
      <br />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Post from './Post.vue';

export default {
  name: 'Posts',
  components: {
    Post
  },
  props: [
    'posts'
  ],
  computed: mapGetters(['allPosts']),
  methods: {
    ...mapActions(['fetchPosts']),
    markLiked(e) {
      e.liked = !e.liked;
    }
  },
  created() {
    this.fetchPosts();
  }
}
</script>
