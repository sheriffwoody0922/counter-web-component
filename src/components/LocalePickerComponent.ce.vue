<template>
  <div class="relative inline-block text-left">
    <select 
    @change="changeLocale"
    class="block appearance-none w-22 text-blue-400 text-sm bg-white border 
        border-gray-300 hover:border-gray-500 px-2 py-1 pr-6 rounded leading-tight 
        focus:outline-none focus:shadow-outline-blue focus:border-blue-300 shadow 
        font-semibold"
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center 
      px-2 text-blue-400">
      <svg class="fill-current h-4 w-4" viewBox="-10 -6 30 30">
        <path d="M10 12l-8-8-1.414 1.414L10 14.828l9.414-9.414L18 4z" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocalePickerComponent',
  emits: ['change-language'],
  methods: {
    changeLocale(event: Event) {
      const selectElement = event.target as HTMLSelectElement;
      this.$emit('change-language', selectElement.value);
    }
  }
});
</script>