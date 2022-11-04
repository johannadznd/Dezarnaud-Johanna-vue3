<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(
    {
        character: String,
        gameSeries: String,
        image: String,
        tail: String
    }
)
const router = useRouter()

const goToDetail = tail => {
    router.push({ name: 'detail', params: { tail } })
}

</script>

<template>
    <div class="col-4 col-12-medium">
        <section class="middle">
            <img :src="image" @click="goToDetail(tail)" />
            <header>
                <h2>{{ character }}</h2>
            </header>
            <p>{{ gameSeries }}</p>
        </section>
    </div>
</template>