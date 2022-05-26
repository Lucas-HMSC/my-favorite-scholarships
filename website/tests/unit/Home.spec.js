import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Home from '@/pages/Home.vue';
import CourseCard from '@/components/CourseCard.vue';
import Modal from '@/components/Modal.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Home component', () => {
  let state;
  let store;

  beforeEach(() => {
    state = {
      modal: {
        show: () => false,
      },
      favorite: {
        scholarships: () => []
      }
    }

    store = new Vuex.Store({
      state
    })
  })

  it('should render home section', () => {
    const wrapper = shallowMount(Home, { store, localVue })
    expect(wrapper.find('.home').exists()).toBe(true);
  })

  it('should render h1 title', () => {
    const wrapper = shallowMount(Home, { store, localVue })
    expect(wrapper.find('.home__title').text()).toContain("Bolsas favoritas");
  })

  it('should render home introduction', () => {
    const wrapper = shallowMount(Home, { store, localVue })
    expect(wrapper.find('.home__text').text()).toContain("Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.");
  })

  it('should render filter block', () => {
    const wrapper = shallowMount(Home, { store, localVue })
    expect(wrapper.find('.home__filter').exists()).toBe(true);
  })

  it('should render add scholarship box', () => {
    const wrapper = shallowMount(Home, { store, localVue })
    expect(wrapper.find('.home__addbox').exists()).toBe(true);
  })

  it("should'n render CourseCard component", () => {
    const wrapper = mount(Home, { store, localVue })
    expect(wrapper.findComponent(CourseCard).exists()).toBe(false);
  })

  it("should render Modal component", () => {
    const wrapper = mount(Home, { store, localVue })
    expect(wrapper.findComponent(Modal).exists()).toBe(true);
  })
});