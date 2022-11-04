<script setup>
const props = defineProps({
    nbrAmiibo: Number
})
</script>

<template>
    <header>
        <h2>Ma Collection</h2>
        <p>{{ nbrAmiibo }}</p>
    </header>


</template>