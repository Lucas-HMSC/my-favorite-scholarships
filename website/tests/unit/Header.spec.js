import { shallowMount } from '@vue/test-utils';

import Header from '@/components/Header.vue';

describe('Header component', () => {
  it('should render Header component', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.findComponent(Header).exists()).toBe(true);
  })

  it('should render logo block', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('img').exists()).toBe(true)
  })
});