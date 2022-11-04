<script setup>
const props = defineProps({
    name: String,
    image: String,
    type: String
})
</script>

<template>
    <div class="col-8 col-12-medium imp-medium">
        <article class="box post">
            <a href="#" class="featured"><img :src="image" alt="" /></a>
            <header>
                <h2>{{ name }}</h2>
                <p>{{ type }}</p>
            </header>
        </article>
    </div>
</template>