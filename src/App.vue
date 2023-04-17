<template>
  <header>
    <div class="wrapper">
      <IndexPage></IndexPage>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import IndexPage from "./views/IndexPage.vue";
</script>
