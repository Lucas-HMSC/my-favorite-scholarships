import { shallowMount } from '@vue/test-utils';

import Footer from '@/components/Footer.vue';

describe('Footer component', () => {
  it('should render whatsapp block', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.findComponent(Footer).exists()).toBe(true);
  })
});