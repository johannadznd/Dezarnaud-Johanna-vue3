<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

</script>

<template>

  <body class="homepage is-preload">
    <div id="page-wrapper">
      <section id="header">
        <TheHeader />
        <RouterView />
      </section>
      <TheFooter />
    </div>
  </body>
</template>
