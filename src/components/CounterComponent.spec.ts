import { mount, VueWrapper } from '@vue/test-utils';

import CounterComponent from './CounterComponent.ce.vue';

describe('CounterComponent', () => {
  let wrapper: VueWrapper<any>;
  const onUpdateCountMock = jest.fn();
  
  beforeEach(() => {
    wrapper = mount(CounterComponent, {
      props: {
        count: 0,
        onUpdateCount: onUpdateCountMock
      }
    });
  });

  it('renders two buttons', () => {
    expect(wrapper.findAll('button').length).toBe(2);
  });
  
  it('disables decrement button when count is 0', () => {
    expect(wrapper.find('button:first-child').attributes('disabled')).toBeDefined();
  });
  
  it('enables decrement button when count is more than 0', async () => {
    await wrapper.setProps({ count: 1 });
    expect(wrapper.find('button:first-child').attributes('disabled')).toBeUndefined();
  });

  it('calls onUpdateCount with decremented value when decrement is clicked', async () => {
    // First ensure the button is clickable
    await wrapper.setProps({ count: 1 });
    await wrapper.find('button:first-child').trigger('click');
    expect(onUpdateCountMock).toHaveBeenCalledWith(0);
  });

  it('calls onUpdateCount with incremented value when increment is clicked', async () => {
    await wrapper.find('button:last-child').trigger('click');
    expect(onUpdateCountMock).toHaveBeenCalledWith(1);
  });

  it('applies correct classes to buttons based on count', async () => {
    const decrementButton = wrapper.find('button:first-child');
    const incrementButton = wrapper.find('button:last-child');

    // When count is 0
    expect(decrementButton.classes()).toContain('bg-gray-200');
    expect(decrementButton.classes()).toContain('text-gray-400');
    
    // When count is greater than 0
    await wrapper.setProps({ count: 1 });
    expect(decrementButton.classes()).toContain('bg-white');
    expect(decrementButton.classes()).toContain('text-blue-300');
    
    // Increment button should always have the same classes
    expect(incrementButton.classes()).toContain('bg-white');
    expect(incrementButton.classes()).toContain('text-blue-300');
  });
});
