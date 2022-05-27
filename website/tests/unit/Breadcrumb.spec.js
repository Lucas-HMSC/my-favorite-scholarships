import { shallowMount } from '@vue/test-utils';

import Breadcrumb from '@/components/Breadcrumb.vue';

describe('Breadcrumb component', () => {
  it('should render breadcrumb block', () => {
    const wrapper = shallowMount(Breadcrumb)
    expect(wrapper.findComponent(Breadcrumb).exists()).toBe(true);
  })
});