<template>
  <div class="mb-8">
    <h2 class="font-bold text-2xl text-left mb-4 ml-3">{{title}}</h2>
    <div class="flex flex-row flex-wrap items-center">
      <div v-for="(hardSource, index) of hardSources" :key="hardSource">
        <BrowseTile :imageSource="hardSource" :tileString="strings[index]"/>
      </div>
      <router-link to="/coming-soon" class="text-md underline text-white w-48 my-20 ml-3">see all...</router-link>
    </div>
  </div>
</template>

<script>
import BrowseTile from "@/components/BrowseTile";
export default {
  name: "BrowseRow",
  components: { BrowseTile },
  props: {
    hardSources: {type: Array, required: true},
    strings: {type: Array, required: true},
    title: {type: String, required: true},
  }
}
</script>

<style scoped>

a {
  color: white;
}

</style>