<template>
  <v-img :src="require(`@/assets/mixtape.svg`)" width="1200px" class="mx-auto">
    <v-container class="w-4/6 h-full" style="padding-top: 120px">
      <v-row style="margin-bottom: 150px">
        <v-btn color="#6247aaff" x-large bottom class="mx-auto" @click="$router.push('play')">
          Start your mix
          <v-icon class="pl-4">mdi-play-circle-outline</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-col>
          <p>Duration</p>
          <round-slider
            v-model="duration"
            class="mx-auto"
            step="5"
            pathColor="#dec9e9ff"
            rangeColor="#6247aaff"
            radius="100"
          />
        </v-col>
        <v-col>
          <p>Intensity</p>
          <round-slider
            v-model="intensity"
            class="mx-auto"
            step="10"
            pathColor="#dec9e9ff"
            rangeColor="#6247aaff"
            radius="100"
          />
        </v-col>
      </v-row>

      <h1 class="mt-12 mb-2">Your Daily Recommended Mix</h1>
      <MixTrack :intensity="intensity" :duration="duration" :category="category" />
    </v-container>
  </v-img>
</template>


<script>
// import Chips from "../components/Chips";
import RoundSlider from "vue-round-slider";
import MixTrack from '@/components/MixTrack'

export default {
  name: "Remix",
  components: { RoundSlider, MixTrack },
  data: () => ({
    duration: 30,
    intensity: 5,
    category: null
  }),
  mounted () {
    const { duration, intensity, category } = this.$route.query
    this.duration = duration ? parseInt(duration) : 30
    this.intensity = intensity ? parseInt(intensity) : 5
    this.category = category
  }
};
</script>