<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue';
import TheHeaderList from '../components/TheHeaderList.vue';
import TableList from '../components/TableList.vue';

const allAmiibo = ref([])
const isLoading = ref(true)

onMounted(async () => {
    const amiibo = await axios.get(`https://www.amiiboapi.com/api/amiibo`)
    allAmiibo.value = amiibo.data.amiibo
    isLoading.value = false
})
</script>
<template>
    <section id="main">
        <div v-if="!isLoading" class="container">
            <article class="box post">
                <TheHeaderList :nbrAmiibo="allAmiibo.length" />
                <p>
                    <TableList :allAmiibo="allAmiibo" />
                </p>
            </article>
        </div>
        <div v-else>
            Chargement ...
        </div>
    </section>
</template>