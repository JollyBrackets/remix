<template>
  <section class="h-full w-full bg-black flex px-20 py-20 flex-col">
    <BrowseRow :title="'Channels'" :hardSources="channelHardSources" :strings="channels" />
    <BrowseRow :title="'Categories'" :hardSources="categoriesHardSources" :strings="categories"/>

    <h2 class="font-bold text-2xl text-left mb-4 ml-3">Muscle Groups</h2>
  </section>
</template>

<script>

import BrowseRow from "@/components/BrowseRow";
export default {
  name: "Browse",
  components: {BrowseRow},
  data: () => ({
    channelHardSources: ["caroline-girvan", "chloe-ting", "fit-for-fun", "growingannanas", "headspace", "heather-robertson", "les-mills", "mady-morrison", "my-life", "pamela-reif", "popsugar-fitness", "tiff-x-dan"],
    channels: ["Caroline Girvan", "Chloe Ting", "Fit for Fun", "Growing Annanas", "Headspace", "Heather Robertson", "Les Mills", "Mady Morrison", "My Life", "Pamela Reif", "Popsugar Fitness", "Tiff x Dan"],
    categoriesHardSources: ["body-balance", "body-combat", "breathing", "cardio", "cool-down", "dance", "health-advice", "hiit", "meditation", "mindfullness", "pilates", "stretch", "warm-up", "yoga"],
    categories: ["Body Balance", "Body Combat", "Breathing", "Cardio", "Cool Down", "Dance", "Health Advice", "HIIT", "Meditation", "Mindfullness", "Pilates", "Stretch", "Warm Up", "Yoga"],
  }),

}
</script>

<style scoped>

</style>