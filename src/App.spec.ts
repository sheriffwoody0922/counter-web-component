import { mount } from '@vue/test-utils';
import Component from './App.ce.vue'; // Update with the actual path
import CounterComponent from './components/CounterComponent.ce.vue';
import MetricsDisplayComponent from './components/MetricsDisplayComponent.ce.vue';
import ResetComponent from './components/ResetComponent.ce.vue';
import LocalePickerComponent from './components/LocalePickerComponent.ce.vue';

describe('MainComponent', () => {
  // Asserting that child components are rendered
  it('renders child components', () => {
    const wrapper = mount(Component);

    expect(wrapper.findComponent(CounterComponent).exists()).toBeTruthy();
    expect(wrapper.findComponent(MetricsDisplayComponent).exists()).toBeTruthy();
    expect(wrapper.findComponent(ResetComponent).exists()).toBeTruthy();
    expect(wrapper.findComponent(LocalePickerComponent).exists()).toBeTruthy();
  });

  // Testing emitted events
  it('emits updateCount event when counter is updated', async () => {
    const wrapper = mount(Component);
    await wrapper.vm.updateCount(10);

    expect(wrapper.vm.count).toBe(10);
  });

  it('resets count to 0 on reset event', async () => {
    const wrapper = mount(Component);
    await wrapper.vm.updateCount(5); // Set initial count
    await wrapper.findComponent(ResetComponent).vm.$emit('reset'); // Simulate reset event

    expect(wrapper.vm.count).toBe(0);
  });
});
