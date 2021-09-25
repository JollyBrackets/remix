<template>
  <v-container>
    <v-row>
      <v-col>
        <p>Desired Training Length</p>
        <round-slider
          v-model="duration"
          class="mx-auto"
          step="5"
          pathColor="#dec9e9ff"
          rangeColor="#6247aaff"
        />
      </v-col>
      <v-col>
        <p>Desired Training Intensity</p>
        <round-slider
          v-model="intensity"
          class="mx-auto"
          step="10"
          pathColor="#dec9e9ff"
          rangeColor="#6247aaff"
        />
      </v-col>
    </v-row>

    <v-container>
      <h1>Your Daily Recommended Mix: {{ totalDuration}}</h1>
      <v-row no-gutters align="center" justify="center">
        <v-col v-for="(part, i) in mix" :key="i" style="position: relative" :style="'min-width: ' + part.duration / totalDuration * 100 + '%'">
          <v-menu
            :close-on-content-click="false"
            open-on-hover
            bottom
            max-width="400"
            nudge-bottom="100"
            class="z-40"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-hover v-slot="{ hover }">
                <v-sheet
                  :color="part.color"
                  class="tile py-5 mr-1"
                  :class="{ 'py-6': hover }"
                  v-on="on"
                  v-bind="attrs"
                >
                {{ part.duration }}
                </v-sheet>
              </v-hover>
            </template>

            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                width="400px"
                :src="require(`../assets/${categoryImages[part.category]||'hiit'}.jpg`)"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
              >
               <v-sparkline
                :smooth="16"
                :gradient="['#f72047', '#ffd200', '#1feaea']"
                :line-width="3"
                :value="heartbeats"
                auto-draw
                stroke-linecap="round"
              ></v-sparkline>
              <!-- <p class="text-h3">{{ part.category }}</p> -->
              <v-list class="transparent">
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img
                      :src="require(`../assets/${channelImages[part.trainer]||'les-mills'}.jpg`)"
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
    </v-container>
  </v-container>
</template>


<script>
// import Chips from "../components/Chips";
import mockdata from "@/mockdata";
import RoundSlider from "vue-round-slider";

export default {
  name: "Remix",
  components: { RoundSlider },
  data: () => ({
    duration: 30,
    intensity: 5,
  
    categoryImages: {
      'Breathing': 'breathing',
      'Yoga': 'yoga',
      'HIT': 'hiit',
      'Body Balance': 'body-balance',
      'Stretch': 'stretch',
      'Tai Chi': 'tai-chi',
      'Meditation': 'meditation',
      'Warm Up': 'warm-up',
      'Cool Down': 'cool-down',
      'Body Combat': 'body-combat',
      'Dance': 'dance',
      'Pilates': 'pilates',
      'Health Advice': 'health-advice',
      'Mindfulness': 'mindfullness',
      'Cardio': 'cardio',
    },

    channelImages: {
      'Caroline Girvan': 'caroline-girvan',
      'Chloe Ting': 'chloe-ting',
      'Fit for Fun': 'fit-for-fun',
      'Growing Annanas': 'growingannanas',
      'Headspace': 'headspace',
      'Heather Robertson': 'heather-robertson',
      'Les Mills': 'les-mills',
      'Mady Morrison': 'mady-morrison',
      'My Life': 'my-life',
      'Pamela Reif': 'pamela-reif',
      'Popsugar Fitness': 'popsugar-fitness',
      'Tiff x Dan': 'tiff-x-dan',
    }
  }),
  methods: {
    heartbeat () {
      return Math.ceil(Math.random() * (120 - 80) + 80)
    }
  },
  computed: {
    totalDuration () {
      return this.mix.reduce((total, part) =>  total + part.duration,0)
    },
    mix () {
      return mockdata.magicAlgo(this.intensity / 10, this.duration)
    },
    heartbeats () {
      return Array.from({ length: 50 }, this.heartbeat)
    }
  },
};
</script>
