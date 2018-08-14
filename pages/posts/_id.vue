<template>
  <div>
    <post :post="post"></post>
  </div>
</template>

<script>
  import axios from 'axios'
  import Post from '@/components/Post'

  export default {
    data () {
      return {
        post: null
      }
    },
    head() {
      return {
        title: this.post.title
      }
    },
    components: {
      Post
    },
    async asyncData ({ params, error }) {
      try {

        let response =  await  axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

        return {
          post: response.data
        }
      } catch(e) {
        error({
          statusCode: e.response.status
        })
      }
    }
  }
</script>
