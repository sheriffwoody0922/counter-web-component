import { mount } from '@vue/test-utils';
import ResetComponent from './ResetComponent.ce.vue';

describe('ResetComponent', () => {
  // Helper function to create a wrapper
  const createWrapper = (messages: any) => {
    return mount(ResetComponent, {
      propsData: {
        messages,
      },
    });
  };

  it('renders the reset button message', () => {
    const messages = { reset: 'Reset Counter' };
    const wrapper = createWrapper(messages);

    expect(wrapper.text()).toContain(messages.reset);
  });

  it('emits "reset" event when clicked', async () => {
    const messages = { reset: 'Reset Counter' };
    const wrapper = createWrapper(messages);
  
    await wrapper.trigger('click');
  
    const resetEvents = wrapper.emitted('reset');
    expect(resetEvents).toBeTruthy(); // Check if any 'reset' events have been emitted
    expect(resetEvents?.length).toBe(1); // Safely access the length property
  });
});