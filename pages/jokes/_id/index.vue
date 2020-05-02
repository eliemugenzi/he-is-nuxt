<template>
  <main class="joke">
      <nuxt-link to="/jokes">Back to Jokes</nuxt-link>
      <p class="single-joke" v-if="fetched">{{joke}}</p>
      <p v-else>Fetching...</p>
  </main>
</template>

<script>
import axios from 'axios';
export default {
  async created(){
      const config = {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      };

      try{
        const { data } = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config);
        this.joke = data.joke;
        this.fetched = true;
      } catch(error){
          console.log(error);
      }
  },
  
  data(){
      return {
          joke: null,
          fetched: false,
      }
  },
  head(){
      return {
          title: this.fetched ? this.joke : 'A single joke'
      }
  }
}
</script>

<style lang="scss" scoped>
  .single-joke{
      margin-top: 20px;
  }
</style>
