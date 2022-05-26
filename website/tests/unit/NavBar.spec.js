import { shallowMount } from '@vue/test-utils';

import NavBar from '@/components/NavBar.vue';

describe('NavBar component', () => {
  it('should render account block', () => {
    const wrapper = shallowMount(NavBar)
    expect(wrapper.find('.nav__account').exists()).toBe(true);
  })

  it('should render account text', () => {
    const wrapper = shallowMount(NavBar)
    expect(wrapper.find('.nav__account').text()).toContain("Minha conta");
  })

  it('should render menu block', () => {
    const wrapper = shallowMount(NavBar)
    expect(wrapper.find('.nav__menu').exists()).toBe(true);
  })

  it('should render menu text', () => {
    const wrapper = shallowMount(NavBar)
    expect(wrapper.find('.nav__menu').text()).toContain("Menu");
  })
});