<script setup>

const props = defineProps(
    {
        release: Object,
    }
)
</script>


<template>
    <section class="box">
        <header>
            <h3>Dates sorties</h3>
        </header>

        <ul class="divided">
            <li>au: {{ release.au}}</li>
            <li>eu: {{ release.eu }}</li>
            <li></li>
            <li></li>
        </ul>

    </section>
</template>