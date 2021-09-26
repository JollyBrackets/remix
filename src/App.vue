<template>
  <div>
    <v-app dark>
      <v-row class="pt-4">
        <v-col class="text-left text-lg font-bold pl-7">
          <span class="text-blue-violet-crayola">SpotiFit</span> - Remix your workout
        </v-col>
        <v-col id="nav">
          <router-link to="/browse">Browse</router-link>
          |
          <router-link to="/remix"> Remix</router-link>
          |
          <router-link to="/play"> Play</router-link>
        </v-col>
        <v-col>
          <Settings></Settings>
        </v-col>
      </v-row>
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
