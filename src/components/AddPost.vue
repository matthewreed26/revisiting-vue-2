<template>
  <div>
    <form @submit="addPost">
      <input type="text" v-model="newPost.title" name="title" placeholder="Add Post Title" />
      <br />
      <textarea v-model="newPost.body" name="body" placeholder="Add Post Body" ></textarea>
      <br />
      <button @click="addPost">Submit</button>
    </form>
  </div>
</template>

<script>
import uuid from 'uuid';

export default {
  name: 'AddPost',
  data() {
    return {
      newPost: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    addPost(e) {
      e.preventDefault();
      const newPost = {
        id: uuid.v4(),
        userId: uuid.v4(),
        title: this.newPost.title,
        body: this.newPost.body,
        liked: false
      }
      this.$emit('add-post', newPost);
      this.newPost = {
        title: '',
        body: ''
      };
    }
  }
}
</script>
