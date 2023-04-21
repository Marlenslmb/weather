<template>
  <v-card class="mx-auto" width="350">
    <div class="location-box">
      <div class="location">
        {{ weatherForm.name }}, {{ weatherForm.sys.country }}
      </div>
      <div class="date">{{ dateBuilder() }}</div>
    </div>
    <v-card-item title="">
      <template v-slot:subtitle>
        <v-icon
          :icon="weatherIcon"
          size="18"
          color="error"
          class="me-1 pb-1"
        ></v-icon>
        {{ weatherForm.weather[0]?.main }}
      </template>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col class="text-h2" cols="8">
          <!-- TODO поставить условия для фаренгейта и цельсии -->
          {{ Math.round(weatherForm.main.temp) }}
          <v-icon v-if="unitState === UnitsEnum.Metric"
            >mdi-temperature-celsius</v-icon
          >
          <v-icon v-if="unitState === UnitsEnum.Imperial"
            >mdi-temperature-fahrenheit</v-icon
          >
        </v-col>

        <v-col cols="4" class="text-right">
          <v-icon color="error" icon="mdi-weather-hurricane" size="88"></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between flex-wrap">
      <v-list-item density="compact" prepend-icon="mdi-weather-windy">
        <v-list-item-subtitle
          >{{ weatherForm.wind.speed }} м/с</v-list-item-subtitle
        >
      </v-list-item>
      <v-list-item density="compact" prepend-icon="mdi-water-percent">
        <v-list-item-subtitle
          >{{ weatherForm.main.humidity }} %</v-list-item-subtitle
        >
      </v-list-item>
    </div>
    <div class="d-flex py-3 justify-space-between flex-wrap">
      <v-list-item :title="$t('Ощущается как')">
        <v-list-item-subtitle
          >{{ weatherForm.main.feels_like }}
          <v-icon v-if="unitState === UnitsEnum.Metric"
            >mdi-temperature-celsius</v-icon
          >
          <v-icon v-if="unitState === UnitsEnum.Imperial"
            >mdi-temperature-fahrenheit</v-icon
          >
        </v-list-item-subtitle>
      </v-list-item>
      <v-list-item :title="$t('Давление')">
        <v-list-item-subtitle
          >{{ weatherForm.main.pressure }} мм рт. ст.
        </v-list-item-subtitle>
      </v-list-item>
    </div>
    <div class="d-flex py-3 justify-space-between flex-wrap">
      <v-list-item :title="$t('Мин. темп.')">
        <v-list-item-subtitle
          >{{ weatherForm.main.temp_min }}
        </v-list-item-subtitle>
      </v-list-item>
      <v-list-item :title="$t('Макс. темп.')">
        <v-list-item-subtitle
          >{{ weatherForm.main.temp_max }}
        </v-list-item-subtitle>
      </v-list-item>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useWeatherForecastStore } from "../store";
import { UnitsEnum } from "@/api/types/index.types";

defineProps({
  unitState: String,
});
const weatherStore = useWeatherForecastStore();

const weatherForm = computed(() => weatherStore.getWeatherForecasts);

const weatherIcon = computed((): string => {
  return weatherForm.value.weather[0]?.main === "Clear"
    ? "mdi-weather-cloudy"
    : "";
});

function dateBuilder() {
  let d = new Date(),
    months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
    day = days[d.getDay()],
    date = d.getDate(),
    month = months[d.getMonth()],
    year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
</script>

<style>
.location-box .location {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
</style>
