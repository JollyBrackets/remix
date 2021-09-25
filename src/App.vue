<template>
  <div id="app" class="v-application text-white bg-black min-h-screen">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/browse">Browse</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #815ac0ff;
    }
  }
}
</style>

<script>
import mockdata from './mockdata'
console.log(mockdata.generateData(100))

export default {
  data: () => ({
    
  }) 
}
</script>