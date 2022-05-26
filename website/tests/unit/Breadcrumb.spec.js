import { shallowMount } from '@vue/test-utils';

import Breadcrumb from '@/components/Breadcrumb.vue';

describe('Breadcrumb component', () => {
  it('should render breadcrumb block', () => {
    const wrapper = shallowMount(Breadcrumb)
    expect(wrapper.find('.breadcrumb__text').exists()).toBe(true);
  })

  it('should render breadcrumb text', () => {
    const wrapper = shallowMount(Breadcrumb)
    expect(wrapper.find('.breadcrumb__text').text()).toContain("Minha conta");
  })
});