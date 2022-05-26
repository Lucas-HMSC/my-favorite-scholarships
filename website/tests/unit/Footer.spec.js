import { shallowMount } from '@vue/test-utils';

import Footer from '@/components/Footer.vue';

describe('Footer component', () => {
  it('should render whatsapp block', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.find('.footer__whatsapp').exists()).toBe(true);
  })

  it('should render whatsapp text', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.find('.footer__whatsapp > p > span').text()).toContain("0800 123 2222");
    expect(wrapper.find('.footer__whatsapp > p').text()).toContain("Segunda a sexta de 8h às 22h");
  })

  it('should render contact block', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.find('.footer__contact').exists()).toBe(true);
  })

  it('should render contact text', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.find('.footer__contact').text()).toContain("Chat");
  })

  it('should render email text', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.find('.footer__contact').text()).toContain("E-mail");
  })

  it('should render help text', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.find('.footer__contact').text()).toContain("Ajuda");
  })

  it('should render message block', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.find('.footer__message').exists()).toBe(true);
  })

  it('should render message text', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.find('.footer__message').text()).toContain("Feito com");
    expect(wrapper.find('.footer__message').text()).toContain("pela Quero Educação");
  })
});