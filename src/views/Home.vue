<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AddPost />
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue';
import AddPost from '@/components/AddPost.vue';

export default {
  name: 'Home',
  components: {
    Posts,
    AddPost
  }
}
</script>
