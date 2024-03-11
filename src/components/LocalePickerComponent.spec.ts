import { shallowMount } from '@vue/test-utils';
import LocalePickerComponent from './LocalePickerComponent.ce.vue';

describe('LocalePickerComponent', () => {
  it('renders a select element', () => {
    const wrapper = shallowMount(LocalePickerComponent);
    expect(wrapper.find('select').exists()).toBe(true);
  });

  it('emits change-language event with the selected language value when changed', async () => {
    const wrapper = shallowMount(LocalePickerComponent);
    const selectElement = wrapper.find('select');
    
    await selectElement.setValue('fr'); // simulate changing the select value to French
    
    expect(wrapper.emitted()['change-language']).toBeTruthy();
    expect(wrapper.emitted()['change-language'][0]).toEqual(['fr']); // check if "fr" was emitted
  });

  it('has two options available', () => {
    const wrapper = shallowMount(LocalePickerComponent);
    const options = wrapper.findAll('option');
    expect(options.length).toBe(2);
    expect(options[0].attributes().value).toBe('en');
    expect(options[1].attributes().value).toBe('fr');
  });
});
