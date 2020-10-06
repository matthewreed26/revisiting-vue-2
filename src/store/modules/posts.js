import axios from 'axios';

const state = {
    posts: []
};
const getters = {
    allPosts: (state) => state.posts
};
const actions = {
    async fetchPosts({ commit }){
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const populatedPosts = res.data.map(post => {return {...post, "liked": false}});
        commit('setPosts', populatedPosts);
    },

    async addNewPost({ commit }, newPost){
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts?_limit=5', newPost);
        commit('newPost', res.data);
    }
};
const mutations = {
    setPosts: (state, posts) => (state.posts = posts),
    newPost: (state, post) => state.posts.unshift(post)
};

export default {
    state,
    getters,
    actions,
    mutations
};