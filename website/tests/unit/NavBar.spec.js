import { shallowMount } from '@vue/test-utils';

import NavBar from '@/components/NavBar.vue';

describe('NavBar component', () => {
  it('should render NavBar component', () => {
    const wrapper = shallowMount(NavBar);
    expect(wrapper.findComponent(NavBar).exists()).toBe(true);
  })
});