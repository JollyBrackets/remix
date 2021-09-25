<template>
  <div id="chart">
    <apexchart type="bar" height="200" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: "StackedBar100",
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
    series: [{
      name: 'Warm-Up',
      data: [5]
    }, {
      name: 'Body-Combat Power',
      data: [10]
    }, {
      name: 'Muay Thai',
      data: [15]
    }, {
      name: 'Cool-Down',
      data: [5]
    }, {
      name: 'Meditation',
      data: [10]
    }],
    chartOptions: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: 'normal'
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        categories: [" "],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "min."
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        offsetX: 40
      }
    },
  }),
}
</script>

<style scoped>

</style>
