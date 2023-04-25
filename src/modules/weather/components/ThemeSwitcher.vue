<template>
  <!-- Не было времени для дизайна ( хотел сделать выпадающий список, а не кнопки) -->
  <div class="theme-block">
    <q-btn class="theme-btn" @click="switchToLightTheme">{{
      $t("74f8cf5c-e115-472d-a611-2c64cc5edf0b")
    }}</q-btn>
    <q-btn class="theme-btn" @click="switchToDarkTheme">{{
      $t("3c07177b-dc49-44de-bf1a-5aca0368c400")
    }}</q-btn>
  </div>
</template>

<script lang="ts" setup>
import vuetify from "@/plugins/vuetify";
import { useWeatherForecastStore } from "../store";

const weatherStore = useWeatherForecastStore();

const switchToLightTheme = () => {
  weatherStore.setTheme("light");
  vuetify.theme.global.name.value = "light";
  document.documentElement.style.setProperty(
    "--background-color",
    "var(--background-color-light)"
  );
};

const switchToDarkTheme = () => {
  weatherStore.setTheme("dark");
  vuetify.theme.global.name.value = "dark";
  document.documentElement.style.setProperty(
    "--background-color",
    "var(--background-color-dark)"
  );
};
</script>
