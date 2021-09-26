<template>
  <v-row no-gutters align="center" justify="center">
    <v-col
      v-for="(part, i) in yourMix"
      :key="i"
      style="position: relative"
      :style="'min-width: ' + (part.duration / totalDuration) * 100 + '%'"
    >
      <v-menu
        :close-on-content-click="false"
        open-on-hover
        top
        offset-y
        max-width="400"
        class="z-40"
      >
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-hover v-slot="{ hover }"> -->
            <v-sheet
              v-ripple
              :color="part.color"
              class="tile mr-1"
              :class="small ? 'py-0' : 'py-4'"
              v-on="on"
              v-bind="attrs"
              @click="part.jumpTo && jumpTo(part.jumpTo)"
            >
              {{ part.duration }}
            </v-sheet>
          <!-- </v-hover> -->
        </template>

        <v-card>
          <v-img
            class="white--text align-end"
            height="200px"
            width="400px"
            :src="
              require(`@/assets/${
                categoryImages[part.category] || 'hiit'
              }.jpg`)
            "
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          >
            <v-sparkline
              :smooth="16"
              :gradient="part.intensity < 4 ? ['#ffd200', '#1feaea'] : part.intensity > 7 ?  ['#f72047', '#ffd200'] : ['#f72047', '#ffd200', '#1feaea']"
              :line-width="3"
              :value="getHeartBeats(part.intensity)"
              auto-draw
              stroke-linecap="round"
            ></v-sparkline>
            <!-- <p class="text-h3">{{ part.category }}</p> -->
            <v-list class="transparent">
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    :src="
                      require(`../assets/${
                        channelImages[part.trainer] || 'les-mills'
                      }.jpg`)
                    "
                  />
                </v-list-item-avatar>

                <v-list-item-content class="text-left">
                  <v-list-item-title>{{ part.trainer }}</v-list-item-title>
                  <v-list-item-title>{{ part.duration }} min</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="#815ac0ff">mdi-heart-outline</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-img>

          <v-divider></v-divider>

          <v-card-actions>
            {{ part.category }}
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
import mockdata from "@/mockdata";
export default {
  name: 'mix-track',
  props: {
    mix: {
      type: Array,
      default: null
    },
    small: {
      type: Boolean,
      default: false
    },
    intensity: {
      type: Number,
      default: 5
    },
    duration: {
      type: Number,
      default: 30
    },
  },
  data: () => ({
    categoryImages: {
      Breathing: "breathing",
      Yoga: "yoga",
      HIT: "hiit",
      "Body Balance": "body-balance",
      Stretch: "stretch",
      "Tai Chi": "tai-chi",
      Meditation: "meditation",
      "Warm Up": "warm-up",
      "Cool Down": "cool-down",
      "Body Combat": "body-combat",
      Dance: "dance",
      Pilates: "pilates",
      "Health Advice": "health-advice",
      Mindfulness: "mindfullness",
      Cardio: "cardio",
    },

    channelImages: {
      "Caroline Girvan": "caroline-girvan",
      "Chloe Ting": "chloe-ting",
      "Fit for Fun": "fit-for-fun",
      "Growing Annanas": "growingannanas",
      Headspace: "headspace",
      "Heather Robertson": "heather-robertson",
      "Les Mills": "les-mills",
      "Mady Morrison": "mady-morrison",
      "My Life": "my-life",
      "Pamela Reif": "pamela-reif",
      "Popsugar Fitness": "popsugar-fitness",
      "Tiff x Dan": "tiff-x-dan",
    },
  }),
  methods: {
    heartbeat() {
      return Math.ceil(Math.random() * (120 - 80) + 80);
    },
    jumpTo (to) {
      const vid = document.querySelector('#demo-video')
      if (vid) {
        vid.pause()
        vid.currentTime = to;
        vid.play()
      }
    },
    getHeartBeats (intensity) {
      if (intensity < 3) {
        return [69, 70, 70, 70, 70, 68, 68, 68, 68, 79, 79, 79, 79, 71, 71, 71, 71, 74, 74, 74, 74, 79, 79, 79, 79, 77, 77, 77, 77, 78, 78, 78, 78, 72, 72, 72, 72, 72, 72, 72]
      } else if (intensity < 6) {
        return [90, 90, 90, 103, 103, 103, 103, 102, 102, 102, 102, 100, 100, 100, 100, 104, 104, 104, 104, 101, 101, 101, 101, 101, 101, 101, 101, 109, 109, 109, 109, 102, 102, 102, 102, 86, 86, 86, 86, 83]
      } else if (intensity < 10) {
        return [160, 160, 160, 166, 166, 166, 166, 166, 166, 166, 166, 161, 161, 161, 161, 155, 155, 155, 155, 153, 153, 153, 153, 156, 156, 156, 156, 160, 160, 160, 160, 161, 161, 161, 161, 161, 161, 161, 161, 160]
      } else {
        return this.heartbeats
      }
    }
  },
  computed: {
    totalDuration() {
      return this.yourMix.reduce((total, part) => total + part.duration, 0);
    },
    yourMix() {
      if (this.mix) {
        return this.mix
      } else {
        return mockdata.magicAlgo(this.intensity / 10, this.duration);
      }
    },
    heartbeats() {
      return Array.from({ length: 50 }, this.heartbeat);
    },
  }
}
</script>