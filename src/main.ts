import { defineCustomElement } from 'vue';

import AppComponent from './App.ce.vue';
import './assets/css/tailwind.css';

const appComponent = defineCustomElement(AppComponent);

customElements.define('counter-card', appComponent);


