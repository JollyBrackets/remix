<template>
  <video id="demo-video" v-if="url" controls width="100%">
    <source :src="url" type="video/mp4" height="200" />
  </video>
</template>

<script>

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4HzAqy9HDGaFdSxrzwLci9ISZLDuvhlY",
  authDomain: "remix-29f1f.firebaseapp.com",
  projectId: "remix-29f1f",
  storageBucket: "remix-29f1f.appspot.com",
  messagingSenderId: "709267513332",
  appId: "1:709267513332:web:49d147bdbffab09ea6a3a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default {
  name: 'video-player',
  data: () => ({
    url: null
  }),
  async created () {
    this.url = await getDownloadURL(ref(storage, 'gs://remix-29f1f.appspot.com/demo-workout.mp4'))
    console.log(this.url)
  }

}
</script>
