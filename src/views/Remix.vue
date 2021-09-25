<template>
  <v-container>
    <v-row>
      <slider class="w-1/3" name="Desired Training Length" />
      <slider :step="10" class="w-1/3 ml-auto" name="Desired Training Intensity" />
    </v-row>

    <v-container>
      <h1>Your Daily Recommended Mix: {{ totalDuration}}</h1>
      <v-row no-gutters align="center" justify="center">
        <v-col v-for="(part, i) in mix" :key="i" style="position: relative" :style="'min-width: ' + part.duration / totalDuration * 100 + '%'">
          <v-menu
            :close-on-content-click="false"
            open-on-hover
            center
            offset-y
            max-width="400"
            nudge-top="300"
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
                </v-sheet>
              </v-hover>
            </template>

            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                width="400px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
               <!-- <v-sparkline
                :key="String(avg)"
                :smooth="16"
                :gradient="['#f72047', '#ffd200', '#1feaea']"
                :line-width="3"
                :value="heartbeats"
                auto-draw
                stroke-linecap="round"
              ></v-sparkline> -->
              <v-list class="transparent">
                <v-list-item>
                  <v-list-item-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                  </v-list-item-avatar>

                  <v-list-item-content class="text-left">
                    <v-list-item-title>{{ part.trainer }}</v-list-item-title>
                    <v-list-item-title>{{ part.duration }} min</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>  
              </v-img>
              

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text> remove </v-btn>
                <v-btn color="primary" text> swap </v-btn>
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
import Slider from "../components/Slider.vue";
import mockdata from "@/mockdata";

export default {
  name: "Remix",
  components: { Slider },
  data: () => ({
    power: 78,
    ex3: { label: "thumb-color", val: 50, color: "dark green" },
    min: 5,
    max: 120,
    s: 40,
    mix: mockdata.generateData(5),
  }),
  computed: {
    totalDuration () {
      return this.mix.reduce((total, part) =>  total + part.duration,0)
    }
  },
};
</script>
