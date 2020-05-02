<template>
  <main>
      <h1>Jokes</h1>

      <a-list item-layout="horizontal" :data-source="jokes" v-if="jokes.length!==0">
         <div v-for="joke in jokes" :key="joke.id">
            <joke :joke="joke" />
         </div>
      </a-list>
  </main>
</template>

<script>
import axios from 'axios';
import Joke from '../../components/Joke.vue';
export default {
   head(){
       return {
           title: 'List of Jokes'
       }
   },
   data(){
       return {
           jokes: [],
       }
   },
   async created(){
       const config = {
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           }
       };

       try{
          const { data } = await axios.get('https://icanhazdadjoke.com/search', config);
          console.log('RES', data.results);
          this.jokes = data.results;
       } catch(error){
           console.log(error);
       }

   },
   components: {
       Joke,
   }
}
</script>

<style>

</style>