<template>
  <v-hover v-slot="{ hover }">
    <div class="relative h-48 w-48 m-3">
      <div class="h-full w-full bg-cover bg-center"
           :style="{ backgroundImage:`url(${require('../assets/'+imageSource+'.jpg')})` }">
      </div>
      <div v-if="hover" id="channel-tile"
           class=" absolute inset-0 flex justify-center items-center bg-green-400 bg-opacity-90 text-2xl font-extrabold">
        {{ channel }}
      </div>
    </div>
  </v-hover>
</template>

<script>
export default {
  name: "BrowseTile",
  props: {
    imageSource: {type: String, required: true},
    channel: {type: String, required: true},
  }
}
</script>

<style scoped>

</style>