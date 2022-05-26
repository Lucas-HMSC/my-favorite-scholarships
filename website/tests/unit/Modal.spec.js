import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Modal from '@/components/Modal.vue';
import ComboSelect from '@/components/ComboSelect.vue';
import ComboCheckbox from '@/components/ComboCheckbox.vue';
import ComboRange from '@/components/ComboRange.vue';
import ComboCourses from '@/components/ComboCourses.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Home component', () => {
  let state;
  let store;

  beforeEach(() => {
    state = {
      modal: {
        show: () => true,
      },
      favorite: {
        scholarships: () => []
      }
    }

    store = new Vuex.Store({
      state
    })
  })

  it('should render modal section', () => {
    const wrapper = mount(Modal, { store, localVue })
    expect(wrapper.find('.modal').exists()).toBe(true);
  })

  it('should render close icon', () => {
    const wrapper = shallowMount(Modal, { store, localVue })
    expect(wrapper.find('.modal__close').exists()).toBe(true);
  })

  it('should render modal title and subtitle', () => {
    const wrapper = mount(Modal, { store, localVue })
    expect(wrapper.find('.modal__content > h1').text()).toContain("Adicionar bolsa");
    expect(wrapper.find('.modal__content > p').text()).toContain("Filtre e adicione as bolsas de seu interesse.");
  })

  it("should render ComboSelect component", () => {
    const wrapper = mount(Modal, { store, localVue })
    expect(wrapper.findComponent(ComboSelect).exists()).toBe(true);
  })

  it("should render ComboCheckbox component", () => {
    const wrapper = mount(Modal, { store, localVue })
    expect(wrapper.findComponent(ComboCheckbox).exists()).toBe(true);
  })

  it("should render ComboRange component", () => {
    const wrapper = mount(Modal, { store, localVue })
    expect(wrapper.findComponent(ComboRange).exists()).toBe(true);
  })

  it("should'n render ComboCourses component (fetch is not defined)", () => {
    const wrapper = mount(Modal, { store, localVue })
    expect(wrapper.findComponent(ComboCourses).exists()).toBe(false);
  })

  it('should render cancel button', () => {
    const wrapper = shallowMount(Modal, { store, localVue })
    expect(wrapper.find('.modal__buttons > button').exists()).toBe(true);
  })

  it('should render add button', () => {
    const wrapper = shallowMount(Modal, { store, localVue })
    expect(wrapper.find('.modal__add').exists()).toBe(true);
  })
});