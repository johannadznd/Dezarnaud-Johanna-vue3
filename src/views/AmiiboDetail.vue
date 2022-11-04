<script setup>

import InfoCard from '../components/InfoCard.vue';
import CardDate from '../components/CardDate.vue';
import CardImage from '../components/CardImage.vue';

import axios from 'axios'
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const amiibo = ref({})

const isLoading = ref(true)

onMounted(async () => {
    const GetAmiibo = await axios.get(`https://www.amiiboapi.com/api/amiibo/?tail=${route.params.tail}`)
    amiibo.value = GetAmiibo.data.amiibo[0]
    isLoading.value = false
})

</script>   


<template>
    <section id="main">
        <div v-if="!isLoading" class="container">
            <div class="row">
                <div class="col-4 col-12-medium">
                    <InfoCard :amiiboSeries="amiibo.amiiboSeries" :character="amiibo.character"
                        :gameSeries="amiibo.gameSeries" :type="amiibo.type" />
                    <CardDate :release="amiibo.release" />
                </div>
                <CardImage :name="amiibo.name" :image="amiibo.image" :type="amiibo.type" />
            </div>
        </div>
        <div v-else>
            Chargement ...
        </div>
    </section>
</template>