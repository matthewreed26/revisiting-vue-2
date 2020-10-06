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
import { mapActions } from 'vuex';

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
    ...mapActions(['addNewPost']),
    addPost(e) {
      e.preventDefault();
      const newPost = {
        id: uuid.v4(),
        userId: uuid.v4(),
        title: this.newPost.title,
        body: this.newPost.body,
        liked: false
      }
      this.addNewPost(newPost);
      this.newPost = {
        title: '',
        body: ''
      };
    }
  }
}
</script>
