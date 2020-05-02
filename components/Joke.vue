<template>
     <a-list-item slot="renderItem" slot-scope="joke">
      <a-list-item-meta
      >
        <a slot="title" href="https://www.antdv.com/">{{ joke.joke }}</a>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </a-list-item-meta>
    </a-list-item>
</template>

<script>
export default {
    name: 'Joke',
    props: ['joke'],
    data(){
        return {
            item: {
                title: 'Hello world',
            }
        }
    }
}
</script>

<style lang="scss">
    
</style>