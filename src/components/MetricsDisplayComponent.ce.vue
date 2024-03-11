<template>
  <div class="metric-display min-w-full">
    <div class="text-9xl text-center">{{ count }}</div>
    <div class=" text-center">{{ messages.clicked }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'MetricsDisplayComponent',
  props: {
    count: {
      type: Number as PropType<number>,
      required: true,
    },
    messages: {
      type: Object,
      required: true,
    }
  },
});
</script>