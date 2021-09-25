<template>
  <div class="hello">
    <div class="box">
      <round-slider
          v-model="sliderValue"
          step="5"
          pathColor="#dec9e9ff"
          rangeColor="#6247aaff"
          ></round-slider>
    </div>

    <div class="inline">  <h3 class="inline">{{ name }}: </h3>{{ sliderValue }}</div>
  </div>
</template>

<script>
import RoundSlider from "vue-round-slider";

export default {
  name: "Slider",
  components: {
    RoundSlider
  },
  data() {
    return {
      sliderValue: 60
    };
  },
  props: {
    name: {type: String, required: true},
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  padding: 10px;
  display: inline-block;
}
</style>
