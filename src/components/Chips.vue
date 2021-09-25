<template>
  <div class="flex flex-wrap">
    <v-chip
        v-if="chip1"
        class="ma-2"
        close
        @click:close="chip1 = false"
    >
      Closable
    </v-chip>
  </div>
</template>

<script>
export default {
name: "Chips",
  data () {
    return {
      chip1: true,
    }
  },
}
</script>

<style scoped>

</style>
