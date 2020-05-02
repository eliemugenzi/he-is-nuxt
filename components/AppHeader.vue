<template>
 <div class="header">
     <div class="header__inner">
        <div class="brand">
         <h1 class="logo">Dad Jokes</h1>
     </div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail"> <nuxt-link to="/">Home</nuxt-link> </a-menu-item>
      <a-menu-item key="app">
        <nuxt-link to="/jokes">Jokes</nuxt-link>
      </a-menu-item>
      <a-menu-item key="info">
          <nuxt-link to="/about">About</nuxt-link>
      </a-menu-item>
    </a-menu>
  </div>
</div>
     
</template>

<script>
export default {
   name: 'AppHeader',
   data(){
       return {
           current: ['mail']
       }
   }
}
</script>

<style lang="scss" scoped>
  .header{
     margin-bottom: 1rem;
     padding-bottom: 1rem;
     border-bottom: 1px dotted #ccc;

      &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: auto 10%;
      }
  }

  .header .title{
      font-size: 3rem;
      color: #526488;
  }
</style>