<script setup>
import TheNav from '../components/TheNav.vue';
</script>

<template>
    <h1>
        <RouterLink :to="{ name: 'home' }">AmiiVue</RouterLink>
    </h1>
    <TheNav />
</template>