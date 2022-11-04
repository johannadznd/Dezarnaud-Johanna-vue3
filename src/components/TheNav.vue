<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const links = ref([{
    pathName: 'home',
    name: 'Home'
}, {
    pathName: 'list',
    name: 'Liste Amiibo'
}
])
</script>


<template>
    <nav id="nav">
        <ul>
            <li v-for="link in links" :key="link.pathName" :class="{ current: route.name == link.pathName }">
                <RouterLink :to="{ name: link.pathName }">{{ link.name }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>