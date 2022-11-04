<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({
    allAmiibo: Array
})


const goToDetail = tail => {
    router.push({ name: 'detail', params: { tail } })
}

</script>

<template>
    <table>
        <tr>
            <th>Character</th>
            <th>game Series</th>
            <th>Action</th>
        </tr>
        <tr v-for="amiibo in allAmiibo" :key="amiibo.tail">
            <td>{{ amiibo.character }}</td>
            <td>{{ amiibo.gameSeries }}</td>
            <td><button @click="goToDetail(amiibo.tail)">voir</button></td>
        </tr>
    </table>
</template>