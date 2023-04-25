<template>
  <v-card class="mx-auto" width="330">
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
          {{ Math.round(weatherForm.main.temp) }}
          <v-icon v-if="unitState == UnitsEnum.Metric"
            >mdi-temperature-celsius</v-icon
          >
          <v-icon v-if="unitState == UnitsEnum.Imperial"
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
          >{{ weatherForm.wind.speed }}
          {{ $t("c96b23e8-f1c3-4840-a6f8-f946475839d4") }}</v-list-item-subtitle
        >
      </v-list-item>
      <v-list-item density="compact" prepend-icon="mdi-water-percent">
        <v-list-item-subtitle
          >{{ weatherForm.main.humidity }} %</v-list-item-subtitle
        >
      </v-list-item>
    </div>
    <div class="d-flex py-3 justify-space-between flex-wrap">
      <v-list-item :title="$t('e4ff9592-61b4-473d-8138-90eb31a7e9f9')">
        <v-list-item-subtitle
          >{{ weatherForm.main.feels_like }}
        </v-list-item-subtitle>
      </v-list-item>
      <v-list-item :title="$t('628cb06f-1dcb-4b6c-9100-3ce98afc789a')">
        <v-list-item-subtitle
          >{{ weatherForm.main.pressure }}
        </v-list-item-subtitle>
      </v-list-item>
    </div>
    <div class="d-flex py-3 justify-space-between flex-wrap">
      <v-list-item :title="$t('2c0aaf1d-049d-4d23-97e9-44d2be0cdf0d')">
        <v-list-item-subtitle
          >{{ weatherForm.main.temp_min }}
        </v-list-item-subtitle>
      </v-list-item>
      <v-list-item :title="$t('fa8fd9b7-f308-43fd-968a-3b65e3c254f7')">
        <v-list-item-subtitle
          >{{ weatherForm.main.temp_max }}
        </v-list-item-subtitle>
      </v-list-item>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useWeatherForecastStore } from "../store";
import { UnitsEnum } from "@/api/types/index.types";
import { useI18n } from "vue-i18n";

defineProps({
  unitState: String,
});
const weatherStore = useWeatherForecastStore();
const { t } = useI18n();

const weatherForm = computed(() => weatherStore.getWeatherForecasts);
const weatherIcon = computed((): string => {
  return weatherForm.value.weather[0]?.main === "Clear"
    ? "mdi-weather-cloudy"
    : "";
});

function dateBuilder() {
  let d = new Date(),
    months = [
      t("53b0d20a-72c1-4a67-a9d1-2d601aded684"),
      t("f0216bfb-3828-4f25-bcb2-0c49c3b7baa5"),
      t("f426563d-7546-472c-960e-73f08ca2c777"),
      t("97b955aa-29a2-40de-93ab-428828380826"),
      t("5af72aea-4a36-4c6d-a2ab-363fe6a7d20c"),
      t("1cbc1041-2770-4f96-8d27-b69e9d37d6d8"),
      t("fff59397-8f11-4f21-937e-e917ce52608a"),
      t("9adfc6cc-56ab-4b7f-8271-372971ce2a99"),
      t("d57355ea-f86c-41a0-8cae-77bb9fe044a2"),
      t("c67756fc-c6c1-4dad-aa2d-407bef22e229"),
      t("0e3bbca2-e126-4621-aade-34a94c465106"),
      t("85cfdc84-394d-46d3-bef2-26ed77641f0c"),
    ],
    days = [
      t("1494b202-02e1-4c1f-93b5-2443ed97c15a"),
      t("43ed5ec3-7106-4732-9391-35babdf32dd9"),
      t("ec66579f-15bd-4b2c-9a7f-b7abd4acbb6e"),
      t("00631a29-ebde-4311-b9bd-095f42e59cf1"),
      t("1bcc0c69-13c2-4b42-a6f7-a6824f6855f3"),
      t("8944bb15-d0f9-4674-8502-0f79225d0e04"),
      t("b2f2579f-3fb5-4d19-9064-80cd0c30dc84"),
    ],
    day = days[d.getDay()],
    date = d.getDate(),
    month = months[d.getMonth()],
    year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
</script>
