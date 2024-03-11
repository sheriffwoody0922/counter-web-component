<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="w-56 h-96  transform scale-125 bg-gradient-to-b from-blue-400 to-green-100
        flex flex-col justify-center items-center text-white shadow-2xl rounded-lg">
      <locale-picker-component @change-language="changeLocale"></locale-picker-component>
      <metrics-display-component :messages="messages" :count="count"></metrics-display-component>
      <counter-component :count="count" @updateCount="updateCount"></counter-component>
      <reset-component :messages="messages" @reset="count = 0"></reset-component>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

import CounterComponent from './components/CounterComponent.ce.vue';
import MetricsDisplayComponent from './components/MetricsDisplayComponent.ce.vue';
import ResetComponent from './components/ResetComponent.ce.vue';
import LocalePickerComponent from './components/LocalePickerComponent.ce.vue';
import englishMessages from './locales/en.json';
import frenchMessages from './locales/fr.json';

export default {
  components: {
    CounterComponent,
    MetricsDisplayComponent,
    ResetComponent,
    LocalePickerComponent
  },
  setup() {
    const count = ref(0);
    const locale = ref('en');
    const messages = ref(englishMessages);

    function updateCount(changedCount: any) {
      count.value = changedCount;
    }

    function changeLocale(changedLocale: string) {
      locale.value = changedLocale;
      messages.value = changedLocale === 'en' ? englishMessages : frenchMessages;
    }

    return { count, messages, updateCount, changeLocale };
  }
};
</script>

<style>
@import './assets/css/styles.css';
</style>
