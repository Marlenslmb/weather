<template>
  <div>
    <v-btn outlined color="primary" @click="fetchWeather"> CLICK ME</v-btn>
    <v-select
      :modelValue="selectedCity"
      :items="cities"
      :label="'City'"
      @update:modelValue="filterCities('selectedCity', $event)"
    >
    </v-select>

    <CardBlock></CardBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useWeatherForecastStore } from "../store";
import CardBlock from "./CardBlock.vue";

const weatherStore = useWeatherForecastStore();

const selectedCity = ref("");

const cities = computed(() => {
  return weatherStore.getCities.map((e) => {
    return {
      value: e.id,
      title: e.name,
    };
  });
});

function filterCities(key: string, value: string) {
  console.log("asdf");
  // weatherStore.fetchWeatherForecasts(selectedCity.value);
  console.log(key, value);
  weatherStore.setFormValue(key, value);
}
function fetchWeather() {
  console.log("asdf");
  weatherStore.fetchCities();
  console.log(selectedCity);
}
function onClick() {
  console.log("asdf");
}
</script>
