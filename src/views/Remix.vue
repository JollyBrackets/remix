<template>
  <div>
    <div class="about flex w-full flex-wrap px-32">

      <slider class="w-1/3" name="Desired Training Length"/>
      <slider class="w-1/3 ml-auto" name="Desired Training Intensity"/>

    </div>
    <div class="about">
      <v-card
          flat
          color="transparent"
          class="w-full"
      >
        <div id="chart">
          <h1>Your Daily Recommended Mix:</h1>
          <StackedBar100></StackedBar100>
        </div>
      </v-card>
    </div>
  </div>
</template>


<script>
// import Chips from "../components/Chips";
import StackedBar100 from "../components/StackedBar100.vue";
import Slider from "../components/Slider.vue";

export default {
  name: "Remix",
  components: {StackedBar100, Slider},
  data: () => ({
    power: 78,
    ex3: {label: 'thumb-color', val: 50, color: 'dark green'},
    min: 5,
    max: 120,
    s: 40,
  }),
  computed: {},
}
</script>

<style scoped>

</style>
