<template>
  <header>
    <div :class="appTheme" class="wrapper">
      <IndexPage></IndexPage>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import IndexPage from "./views/IndexPage.vue";
import { useWeatherForecastStore } from "./modules/weather/store";
import { computed } from "vue";

const weatherStore = useWeatherForecastStore();

const appTheme = computed(() => `theme-${weatherStore.getTheme}`);
</script>
