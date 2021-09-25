<template>
  <div>
    <v-app dark>
      <div id="nav" class="static bg-black">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
        |
        <router-link to="/browse">Browse</router-link>
        |
        <router-link to="/remix"> Remix</router-link>
        <Settings></Settings>
      </div>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
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
  padding: 60px;

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

import Settings from "./components/Settings";
export default {
  components: {Settings}
}
</script>
