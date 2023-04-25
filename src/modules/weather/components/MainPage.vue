<template>
  <div class="page-container">
    <ThemeSwitcher></ThemeSwitcher>
    <div class="header">
      <div class="text-uppercase font-weight-bold page-title align-self-center">
        {{ $t("7711e96b-8137-44b6-983c-efce018ef08d") }}
      </div>
      <div>
        <q-btn-dropdown
          class="dropdown"
          :label="$t('5f302356-02b6-41ed-ba69-bb249fc55a5e')"
        >
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>
                  {{ $t("264e95b2-1475-49d6-800a-0695ee187331") }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>
                  {{ $t("6a3b2e0e-0d50-4896-af3c-6e5ebc070657") }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>

    <v-autocomplete
      v-model="selectedCity.value"
      :items="cities"
      :label="$t('607c80cc-743e-4ae6-8f53-9a85fa5b031a')"
      @update:modelValue="filterCities('selectedCity', $event)"
    >
    </v-autocomplete>

    <CardBlock :unitState="unitState"></CardBlock>

    <div class="btn-div">
      <q-btn outline class="btn" @click="translateValues">{{
        unitState == UnitsEnum.Metric
          ? $t("cc289191-f8fd-4ed2-916d-bbb2776eadd3")
          : $t("e04dd66c-c5b1-405f-a4f6-ea16a48f995b")
      }}</q-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue";
import { useWeatherForecastStore } from "../store";
import CardBlock from "./CardBlock.vue";
import { UnitsEnum } from "@/api/types/index.types";
import { i18n } from "../../../plugins/i18n";
import ThemeSwitcher from "./ThemeSwitcher.vue";

const weatherStore = useWeatherForecastStore();
const localize = i18n;
const selectedCity = reactive({ value: null });

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
  weatherStore.setFormValue(key, value);
}

function fetchCities() {
  weatherStore.fetchCities();
}
function translateValues() {
  if (unitState.value === UnitsEnum.Metric) {
    weatherStore.setUntis(UnitsEnum.Imperial);
  } else {
    weatherStore.setUntis(UnitsEnum.Metric);
  }
}

function onItemClick(item: any) {
  if (
    item.target.outerText === "Английский язык" ||
    item.target.outerText === "English"
  ) {
    localize.global.locale.value = "en";
  } else {
    localize.global.locale.value = "ru";
  }
}

weatherStore.setTheme("light");

fetchCities();
weatherStore.setUntis(UnitsEnum.Metric);
</script>
