<template>
  <div class="text-center">
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
        class="z-40"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            v-bind="attrs"
            v-on="on"
            color="#815ac0ff"
            rounded
            dark
            class="absolute top-2 right-2 h-6 w-26"
        >
          <img
              src="http://avataaars.io"
              alt="John"
              class="w-6"
          >
          LexHeggli
        </v-btn>


      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                  src="http://avataaars.io"
                  alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-left" style="color: #815ac0ff; font-weight:bold">Elexa Heggli
              </v-list-item-title>
              <v-list-item-subtitle class="text-left">Keep going strong!</v-list-item-subtitle>
            </v-list-item-content>


          </v-list-item>
        </v-list>

        <v-divider class="mb-2"></v-divider>

        <v-header style="color: #815ac0ff; font-weight:bold">Make it personal</v-header>

        <v-checkbox
            label="Dumb bells"
            hide-details
            v-model="message"
            color="#815ac0ff"
            class="mb-2 ml-4"
        />
        <v-checkbox
          label="Jump rope"
          hide-details
          v-model="menu"
          color="#815ac0ff"
          class="mb-2 ml-4"
        />
        <v-checkbox
            label="Yoga Blocks"
            hide-details
            v-model="fav"
            color="#815ac0ff"
            class="ml-4 mb-2"
        />

        <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-switch
                v-model="hints"
                color="#815ac0ff"
            ></v-switch>
          </v-list-item-action>
          <v-list-item-title class="text-left">Enable Garmin Tracking</v-list-item-title>
        </v-list-item>
        </v-list>

        <v-divider class="mb-2"></v-divider>
        <v-header class="text-left" style="color: #815ac0ff; font-weight:bold">Your achievements</v-header>
        <v-list-item>
          <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                alt=""
                :src="require('../assets/owl.png')"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content class="left-2">
            <v-list-item-title class="text-left">Night Owl</v-list-item-title>

          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                alt=""
                :src="require('../assets/creative.png')"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-left">Creative Mixes</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        <v-list-item>
          <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                alt=""
                :src="require('../assets/rock.png')"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-left">HIIT Star</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                alt=""
                :src="require('../assets/feedback.png')"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-left">Feedback Hero</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-menu>
  </div>
</template>

<script>

export default {
  name: "Settings",
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
}

</script>

<style scoped>

</style>
