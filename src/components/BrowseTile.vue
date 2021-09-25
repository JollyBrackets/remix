<template>
  <v-hover v-slot="{ hover }">
    <div class="relative h-48 w-48 m-3">
      <div class="h-full w-full bg-cover bg-center"
           :style="{ backgroundImage:`url(${require('../assets/'+imageSource+'.jpg')})` }">
      </div>
      <router-link to="/coming-soon">
        <div v-if="hover" id="channel-tile"
             class="absolute inset-0 flex justify-center items-center bg-blue-violet-crayola bg-opacity-50 text-2xl font-extrabold cursor-pointer">
          {{ tileString }}
        </div>
      </router-link>
      <div class="absolute bottom-0 right-0 mb-2 mr-2 cursor-pointer" @click="like = !like">
        <v-icon v-if="like"
            color="#dc2626"
        >
          mdi-heart
        </v-icon>
        <v-icon v-if="!like && hover"
            color="#d2b7e5ff"
        >
          mdi-heart-outline
        </v-icon>
        <v-icon v-if="!(like || hover)"
                color="#815ac0ff"
        >
          mdi-heart-outline
        </v-icon>
      </div>
    </div>
  </v-hover>
</template>

<script>
export default {
  name: "BrowseTile",
  props: {
    imageSource: {type: String, required: true},
    tileString: {type: String, required: true},
  },
  data: () => ({
    like: false
  })
}
</script>

<style scoped>

a {
  color: white;
}

</style>