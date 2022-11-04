<script setup>

const props = defineProps(
    {
        amiiboSeries: String,
        character: String,
        gameSeries: String,
        type: String
    }
)

</script>   


<template>
    <section class="box">
        <header>
            <h3>Infos</h3>
        </header>
        <p> amiiboSeries: <b>{{ amiiboSeries }}</b> <br />
            character: {{ character }}<br />
            gameSeries: {{ gameSeries }}<br />
            type: {{ type }}
        </p>
    </section>
</template>