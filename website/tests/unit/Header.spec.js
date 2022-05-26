import { shallowMount } from '@vue/test-utils';

import Header from '@/components/Header.vue';

describe('Header component', () => {
  it('should render help block', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('.header__help').exists()).toBe(true);
  })

  it('should render help text', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('.header__help').text()).toContain("Ajuda");
  })

  it('should render logo block', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('should render account block', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('.header__account').exists()).toBe(true);
  })

  it('should render help text', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('.header__account').text()).toContain("Conta");
  })
});