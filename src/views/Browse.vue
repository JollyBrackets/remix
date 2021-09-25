<template>
  <section class="h-full w-full flex px-20 py-20 flex-col">
    <BrowseRow :title="'Playlists'" :hardSources="playlistHardSources" :strings="playlists" />
    <BrowseRow :title="'Channels'" :hardSources="channelHardSources" :strings="channels" />
    <BrowseRow :title="'Categories'" :hardSources="categoriesHardSources" :strings="categories"/>
    <BrowseRow :title="'Muscle Groups'" :hardSources="muscleGroupsHardSources" :strings="muscleGroups"/>
  </section>
</template>

<script>

import BrowseRow from "@/components/BrowseRow";
export default {
  name: "Browse",
  components: {BrowseRow},
  data: () => ({
    playlistHardSources: ["active", "calm", "early-bird", "favorite", "intense", "night-owl"],
    playlists: ["Active", "Calm", "Early Bird", "Favorite", "Intense", "Night Owl"],
    channelHardSources: ["caroline-girvan", "chloe-ting", "fit-for-fun", "growingannanas", "headspace", "heather-robertson", "les-mills", "mady-morrison", "my-life", "pamela-reif", "popsugar-fitness", "tiff-x-dan"],
    channels: ["Caroline Girvan", "Chloe Ting", "Fit for Fun", "Growing Annanas", "Headspace", "Heather Robertson", "Les Mills", "Mady Morrison", "My Life", "Pamela Reif", "Popsugar Fitness", "Tiff x Dan"],
    categoriesHardSources: ["body-balance", "body-combat", "breathing", "cardio", "cool-down", "dance", "health-advice", "hiit", "meditation", "mindfullness", "pilates", "stretch", "warm-up", "yoga", "tai-chi"],
    categories: ["Body Balance", "Body Combat", "Breathing", "Cardio", "Cool Down", "Dance", "Health Advice", "HIIT", "Meditation", "Mindfullness", "Pilates", "Stretch", "Warm Up", "Yoga", "Tai Chi"],
    muscleGroupsHardSources: ["abs", "arms", "butt", "chest", "full-body", "legs", "lower-back", "neck", "shoulders"],
    muscleGroups: ["Abs", "Arms", "Butt", "Chest", "Full Body", "Legs", "Lower Back", "Neck", "Shoulders"]
  }),

}
</script>

<style scoped>

</style>