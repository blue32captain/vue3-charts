<template>
  <div style="width: 100%;height:20%;display: block;border: 1px solid #ddd;">
    <vue3-charts ref="chartRef" v-bind="{...candleChart}"/>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import Vue3Charts from "../";
import { candleChart } from "./charts";

const chartRef = ref(null)

</script>
