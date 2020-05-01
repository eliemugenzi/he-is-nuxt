<template>
  <main>
    <h1>About Nuxt DadJokes</h1>
    <p>This is an app that displays corny dad jokes</p>
  </main>
</template>

<script>
export default {
  name: 'About',
  head(){
      return {
          title: 'About He is Nuxt',
          meta: [
              {
                  hid: 'description',
                  name: 'description',
                  content: 'Best place for corny dad jokes'
              }
          ]
      }
  }
}
</script>

<style>

</style>