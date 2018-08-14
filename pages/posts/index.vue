<template>
    <div>
      <h3>{{ posts.length }} Posts </h3>
      <post v-for="post in posts" :key="post.id" :post="post"></post>
      <a href="#" v-scroll-to="'body'">To Top</a>
    </div>
</template>

<script>
  import axios from 'axios'
  import Post from '@/components/Post'

  export default {
    data () {
        return {
          posts: []
        }
    },
    layout: 'posts',
    head: {
      title: 'Posts'
    },
    components: {
      Post
    },
    async asyncData () {
        let response =  await  axios.get('https://jsonplaceholder.typicode.com/posts')

        return {
          posts: response.data
        }

    }
  }
</script>
