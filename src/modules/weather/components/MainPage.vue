<template>
  <div>
    <!-- <div class="text-uppercase font-weight-bold page-title">
      {{ $t("7711e96b-8137-44b6-983c-efce018ef08d") }}
    </div> -->

    <v-autocomplete
      :modelValue="selectedCity"
      :items="cities"
      :label="$t('607c80cc-743e-4ae6-8f53-9a85fa5b031a')"
      @update:modelValue="filterCities('selectedCity', $event)"
    >
    </v-autocomplete>

    <CardBlock :unitState="unitState"></CardBlock>

    <v-btn @click="translateValues">{{
      unitState === UnitsEnum.Metric
        ? $t("cc289191-f8fd-4ed2-916d-bbb2776eadd3")
        : $t("e04dd66c-c5b1-405f-a4f6-ea16a48f995b")
    }}</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onUnmounted } from "vue";
import { useWeatherForecastStore } from "../store";
import CardBlock from "./CardBlock.vue";
import { UnitsEnum } from "@/api/types/index.types";

const weatherStore = useWeatherForecastStore();
const selectedCity = ref(null);

const unitState = computed(() => {
  return weatherStore.getUnitState;
});

const cities = computed(() => {
  return weatherStore.getCities.map((e) => {
    return {
      value: e.id,
      title: e.name,
    };
  });
});

function filterCities(key: string, value: string) {
  console.log(key, value);
  weatherStore.setFormValue(key, value);
}

function fetchCities() {
  weatherStore.fetchCities();
}
function translateValues() {
  weatherStore.fetchWeather();
}

fetchCities();

// TODO пока что просто поставил :)
onUnmounted(() => weatherStore.$reset());
</script>

<style>
.page-title {
  color: rgb(67, 160, 71);
}
</style>
