<template>
  <h1>Hello world</h1>
  <v-btn outlined color="primary" @click="onClick"> CLICK ME</v-btn>
</template>

<script lang="ts" setup>
function onClick() {
  console.log("asdf");
}
</script>
