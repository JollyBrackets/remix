<template>
  <section class="h-full w-full bg-black flex px-20 py-20 flex-col">
    <h2 class="font-bold text-2xl text-left mb-4 ml-3">Channels</h2>
    <div class="flex flex-row flex-wrap">
      <div v-for="(hardSource, index) of hardSources" :key="hardSource">
        <BrowseTile :imageSource="hardSource" :channel="channels[index]"/>
      </div>
    </div>
    <h2 class="font-bold text-2xl text-left mb-4 ml-3">Sports</h2>
    <h2 class="font-bold text-2xl text-left mb-4 ml-3">Muscle Groups</h2>
  </section>
</template>

<script>
import BrowseTile from "@/components/BrowseTile";
export default {
  name: "Browse",
  components: { BrowseTile },
  data: () => ({
    hardSources: ["caroline-girvan", "chloe-ting", "fit-for-fun", "growingannanas", "headspace", "heather-robertson", "les-mills", "mady-morrison", "my-life", "pamela-reif", "popsugar-fitness", "tiff-x-dan"],
    channels: ["Caroline Girvan", "Chloe Ting", "Fit for Fun", "Growing Annanas", "Headspace", "Heather Robertson", "Les Mills", "Mady Morrison", "My Life", "Pamela Reif", "Popsugar Fitness", "Tiff x Dan"]
  }),
}
</script>

<style scoped>

</style>