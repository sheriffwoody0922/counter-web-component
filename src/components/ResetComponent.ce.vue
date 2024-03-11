<template>
  <button
    @click="$emit('reset')"
    class="control-panel rounded-full bg-white text-gray-700 py-1 px-6 mt-3"
  >
    {{ messages.reset}}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ResetComponent',
  props: {
    messages: {
      type: Object,
      required: true,
    }
  }
});
</script>
