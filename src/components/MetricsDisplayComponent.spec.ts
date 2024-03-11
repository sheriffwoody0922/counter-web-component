import { shallowMount } from '@vue/test-utils';
import MetricsDisplayComponent from './MetricsDisplayComponent.ce.vue';

describe('MetricsDisplayComponent', () => {
  const factory = (propsData: any) => {
    return shallowMount(MetricsDisplayComponent, {
      propsData: {
        ...propsData,
      },
    });
  };

  it('renders count prop', () => {
    const count = 42;
    const wrapper = factory({ count, messages: {} });

    const displayElement = wrapper.find('.text-9xl');
    expect(displayElement.text()).toBe(count.toString());
  });
  
});
