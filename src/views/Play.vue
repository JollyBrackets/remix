<template>
  <v-container>
    <template v-if="!done">
      <v-row>
        <v-col offset="3" cols="6">
          <VideoPlayer />
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="3" cols="6">
          <MixTrack :mix="mix" />
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="3" cols="6">
          <v-btn x-large class="mt-4" color="#815ac0ff" @click="done = true"
            >Jump To Result</v-btn
          >
        </v-col>
      </v-row>
    </template>

    <template v-if="done">
      <v-row v-if="done" class="mt-7 py-24">
        <v-col offset="3" cols="6">
          <p class="text-h1">GREAT JOB!</p>
        </v-col>
      </v-row>

      <v-row class="mt-7">
        <v-col offset="3" cols="6">
          <p class="text-h5" style="color: #d2b7e5ff">
            <v-icon size="32" color="#d2b7e5ff" class="mr-5"
              >mdi-heart-pulse</v-icon
            >
            <span>Your heart rate</span>
          </p>
          <v-sparkline
            :smooth="16"
            :gradient="['#f72047', '#ffd200', '#1feaea']"
            :line-width="2"
            :value="heartbeats"
            stroke-linecap="round"
          ></v-sparkline>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="3" cols="6">
          <MixTrack :mix="mix" small />
        </v-col>
      </v-row>
      <v-row class="mt-7">
        <v-col offset="3" cols="6">
          <p class="text-h5" style="color: #d2b7e5ff">
            <v-icon size="32" color="#d2b7e5ff" class="mr-5">mdi-fire</v-icon>
            <span>Calories burned</span>
          </p>
          <p class="text-h1">
            <span>89cal</span>
            <span class="text-h3 green--text"> +242% </span>
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-7">
        <v-col offset="3" cols="6">
          <p class="text-h5" style="color: #d2b7e5ff">
            <v-icon size="32" color="#d2b7e5ff" class="mr-5"
              >mdi-meditation</v-icon
            >
            <span>Calm time</span>
          </p>
          <p class="text-h1">
            <span>16 min</span>
          </p>
          <p class="text-h5 green--text">71% weekly goal</p>
        </v-col>
      </v-row>
      <v-row class="mt-7">
        <v-col offset="3" cols="6">
          <p class="text-h5" style="color: #d2b7e5ff">
            <v-icon size="32" color="#d2b7e5ff" class="mr-5">mdi-heart</v-icon>
            Rate this Remix
          </p>
          <v-rating hover length="5" size="64" :value="3"></v-rating>
        </v-col>
      </v-row>

      <v-row class="mt-7">
        <v-col offset="3" cols="6">
          <p class="text-h5" style="color: #d2b7e5ff">
            <v-icon size="32" color="#d2b7e5ff" class="mr-5">mdi-share</v-icon>
            Share the love
          </p>
          <v-btn icon x-large @click="$router.push('/coming-soon')">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon x-large @click="$router.push('/coming-soon')">
            <v-icon>mdi-whatsapp</v-icon>
          </v-btn>
          <v-btn icon x-large @click="$router.push('/coming-soon')">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon x-large @click="$router.push('/coming-soon')">
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="py-7"> </v-row>
    </template>
  </v-container>
</template>

<script>
import MixTrack from "@/components/MixTrack";
import VideoPlayer from "@/components/VideoPlayer";

export default {
  name: "play",
  components: { MixTrack, VideoPlayer },
  data: () => ({
    done: false,
    heartbeats: [
      69, 71, 71, 71, 71, 72, 72, 72, 72, 75, 75, 75, 75, 71, 71, 71, 71, 69,
      69, 69, 69, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 89, 87, 87, 87,
      87, 82, 82, 82, 82, 84, 84, 84, 84, 88, 88, 88, 88, 88, 88, 88, 88, 98,
      98, 98, 98, 102, 102, 102, 102, 107, 107, 107, 107, 99, 99, 99, 99, 101,
      101, 101, 101, 111, 111, 111, 111, 108, 108, 108, 108, 107, 107, 107, 107,
      107, 107, 107, 107, 104, 104, 104, 78, 78, 81, 81, 81, 81, 84, 84, 84, 84,
      82, 82,
    ],
    mix: [
      {
        category: "Warm Up",
        muscleGroups: ["Full Body"],
        duration: 3,
        trainer: "Chloe Ting",
        intensity: 1,
        color: "#dac3e8ff",
        jumpTo: 0,
      },
      {
        category: "Breathing",
        muscleGroups: [],
        duration: 5,
        trainer: "My Life",
        intensity: 0,
        color: "#dec9e9ff",
        jumpTo: 177,
      },
      {
        category: "Body Balance",
        muscleGroups: ["Full Body"],
        duration: 15,
        trainer: "Tiff x Dan",
        intensity: 3,
        color: "#c19ee0ff",
        jumpTo: 410,
      },
      {
        category: "Cool Down",
        muscleGroups: ["Full Body"],
        duration: 3,
        trainer: "Caroline Girvan",
        intensity: 1,
        color: "#dac3e8ff",
        jumpTo: 1349,
      },
    ],
  }),
  mounted() {
    setTimeout(() => {
      const vid = document.querySelector("#demo-video");
      if (vid) {
        vid.onended = () => {
          console.log("fuuuck yeeeeeh!");
          this.done = true;
        };
      } else {
        console.log("no have");
      }
    },1000)
  },
};
</script>