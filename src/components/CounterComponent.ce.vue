<template>
  <div class="w-100 flex justify-between mt-5">
    <button 
      @click="decrement"
      v-bind="count == 0 && { disabled: true }"
      :class="{ 
        'bg-gray-200 text-gray-400': count === 0, 
        'bg-white text-blue-300': count != 0
      }"
      class="w-10 h-10 flex mr-4 items-center justify-center
        rounded-full  focus:outline-none hover:shadow-lg"
    >
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M19 13H5v-2h14v2z" fill="currentColor"/>
      </svg>
    </button>
    <button
      @click="increment" 
      class="w-10 h-10 flex ml-4 items-center justify-center rounded-full 
      bg-white text-blue-300 focus:outline-none hover:shadow-lg"
    >
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" fill="currentColor"/>
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

export default defineComponent({
  name: 'CounterComponent',
  props: {
    count: {
      type: Number,
      required: true,
    },
    onUpdateCount: {
      type: Function as PropType<(newCount: number) => void>,
      required: true
    }
  },
  setup(props) {
    const isCountZero = computed(() => props.count === 0);

    function decrement() {
      if (isCountZero.value) return;
      props.onUpdateCount(props.count - 1);
    }

    function increment() {
      props.onUpdateCount(props.count + 1);
    }

    return { decrement, increment, isCountZero };
  },
});
</script>
