<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <VideoPlayer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VideoPlayer from '@/views/VideoPlayer.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    VideoPlayer
  }
}
</script>
