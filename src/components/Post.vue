<template>
  <div class="post" :class="{'is-liked': post.liked}" @dblclick="$emit('post-liked', post)">
    <p>User {{post.userId}}</p>
    <p>{{post.title}}</p>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: [
    'post'
  ]
}
</script>

<style scoped>
  .post {
    border-style: solid;
  }

  .is-liked {
    background-color: #42b983;
  }
</style>
