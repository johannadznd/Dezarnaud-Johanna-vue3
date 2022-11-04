<script setup>
import TheBanner from '../components/TheBanner.vue';
import CardAmiibo from '../components/CardAmiibo.vue';
import TheFooterHome from '../components/TheFooterHome.vue';

import axios from 'axios'
import { ref, onMounted } from 'vue';
const FAVORITE_AMIIBO = ['00b80502' ,'00520502', '00ab0502']
const myAmiibo = ref([])
const isLoading = ref(true)


FAVORITE_AMIIBO.forEach(favAmiibo => {
  onMounted(async () => {
    const amiibo = await axios.get(`https://www.amiiboapi.com/api/amiibo/?tail=${favAmiibo}`)
    myAmiibo.value.push(amiibo.data.amiibo[0])
    isLoading.value = false
  })
});


</script>

<template>
  <TheBanner />

  <section id="intro" class="container">
    <div v-if="!isLoading" class="row">
      <CardAmiibo v-for="amiibo in myAmiibo" :key="amiibo.tail" :image="amiibo.image" :character="amiibo.character"
        :tail="amiibo.tail" :gameSeries="amiibo.gameSeries" />
    </div>
    <div v-else>
      Chargement ...
    </div>
    <TheFooterHome />
  </section>
</template>
