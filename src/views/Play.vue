<template>
  <v-container>
    <v-row>
      <v-col offset="3" cols="6">
        <video controls width="100%">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
          Your browser does not support HTML video.
        </video>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="3" cols="6">
        <MixTrack />
      </v-col>
    </v-row>

    <v-row class="mt-7">
      <v-col offset="3" cols="6">
        <p class="text-h5" style="color: #d2b7e5ff">
          <v-icon size="32" color="#d2b7e5ff" class="mr-5">mdi-heart-pulse</v-icon>
          <span>Your heart rate</span>
        </p>
        <v-sparkline
          :smooth="16"
          :gradient="['#f72047', '#ffd200', '#1feaea']"
          :line-width="3"
          :value="heartbeats"
          auto-draw
          stroke-linecap="round"
        ></v-sparkline>
      </v-col>
    </v-row>
     <v-row class="mt-7">
      <v-col offset="3" cols="6">
        <p class="text-h5" style="color: #d2b7e5ff">
          Rate this Remix
        </p>
        <v-rating
          hover
          length="5"
          size="64"
          value="3"
        ></v-rating>
      </v-col>
    </v-row>
     <v-row class="mt-7">
      <v-col offset="3" cols="6">
        <p class="text-h5" style="color: #d2b7e5ff">
          
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MixTrack from '@/components/MixTrack'
export default {
  name: 'play',
  components: { MixTrack },
  data: () => ({
    heartbeats: [69, 71, 71, 71, 71, 72, 72, 72, 72, 75, 75, 75, 75, 71, 71, 71, 71, 69, 69, 69, 69, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 89, 87, 87, 87, 87, 82, 82, 82, 82, 84, 84, 84, 84, 88, 88, 88, 88, 88, 88, 88, 88, 98, 98, 98, 98, 102, 102, 102, 102, 107, 107, 107, 107, 99, 99, 99, 99, 101, 101, 101, 101, 111, 111, 111, 111, 108, 108, 108, 108, 107, 107, 107, 107, 107, 107, 107, 107, 104, 104, 104, 78, 78, 81, 81, 81, 81, 84, 84, 84, 84, 82, 82]
  })
}
</script>