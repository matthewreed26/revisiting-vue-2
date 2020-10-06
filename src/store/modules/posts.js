import axios from 'axios';

const state = {
    posts: []
};
const getters = {
    allPosts: (state) => state.posts
};
const actions = {
    async fetchPosts({ commit }){
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const populatedPosts = res.data.map(post => {return {...post, "liked": false}});
        commit('setPosts', populatedPosts);
    }
};
const mutations = {
    setPosts: (state, posts) => (state.posts = posts)
};

export default {
    state,
    getters,
    actions,
    mutations
};