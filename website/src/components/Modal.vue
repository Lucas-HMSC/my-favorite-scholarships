<template>
  <Transition>
    <section class="modal" v-show='modal'>
      <div class="modal__close" @click='handleCloseModal'>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="modal__content">
        <h1>Adicionar bolsa</h1>
        <p>Filtre e adicione as bolsas de seu interesse.</p>
        <ComboSelect
          text='Selecione sua cidade'
          :options='cities'
          :value.sync='filter.city'
        />
        <ComboSelect
          text='Selecione o curso de sua preferência'
          :options='courses'
          :value.sync='filter.course'
        />
        <ComboCheckbox
          text='Como você quer estudar?'
          :options='["Presencial", "A distância"]'
          :value.sync='filter.type'
        />
        <ComboRange
          text='Até quanto pode pagar?'
          :limit='10000'
          :value.sync='filter.price'
        />
        <div class="modal__result">
          <span>Resultado:</span>
          <span>Ordenar por</span>
          <a class="modal__orderby" @click='handleChangeOrdination' v-show='orderByName'>
            Nome da Faculdade
            <i class="fa-solid fa-angle-down"></i>
          </a>
          <a class="modal__orderby" @click='handleChangeOrdination' v-show='!orderByName'>
            Nome da Faculdade
            <i class="fa-solid fa-angle-up"></i>
          </a>
        </div>
        <TransitionGroup>
          <ComboCourses
            v-for='(item, index) in scholarshipsFiltered'
            :key='index'
            :universityName='item.university.name'
            :title='item.course.name'
            :type='item.course.level'
            :value='index'
            :scholarship='item.discount_percentage'
            :payment='item.price_with_discount'
            :image='item.university.logo_url'
            @handleSelectScholarship='handleSelectScholarship'
          />
        </TransitionGroup>
        <div class="modal__buttons">
          <button
            class="modal__cancel"
            @click='handleCloseModal'
          >
            Cancelar
          </button>
          <button
            class="modal__add"
            :class="buttonAddActive ? '' : ' modal__add--disabled'"
            @click='handleClickAddFavorite'
          >
            Adicionar bolsa(s)
          </button>
        </div>
      </div>
    </section>
  </Transition>
</template>

<script>
import ComboSelect from '@/components/ComboSelect.vue';
import ComboCheckbox from '@/components/ComboCheckbox.vue';
import ComboRange from '@/components/ComboRange.vue';
import ComboCourses from '@/components/ComboCourses.vue';

export default {
  name: 'Modal',
  components: {
    ComboSelect,
    ComboCheckbox,
    ComboRange,
    ComboCourses
  },
  computed: {
    modal() {
      return this.$store.state.modal.show;
    },
    buttonAddActive() {
      return this.favoriteScholarshipsSelected.length > 0;
    },
  },
  data: () => ({
    scholarships: [],
    scholarshipsFiltered: [],
    favoriteScholarshipsSelected: [],
    filter: {
      city: '',
      course: '',
      type: ["Presencial", "A distância"],
      price: ''
    },
    cities: [],
    courses: [],
    orderByName: true,
  }),
  watch: {
    'filter.city'() {
      const filter = this.scholarships.filter((item) =>
        (item.campus.city == this.filter.city || this.filter.city == '')
      );
      this.scholarshipsFiltered = filter;
      this.orderByUniversityName();
    },
    'filter.course'() {
      const filter = this.scholarships.filter((item) =>
        (item.course.name == this.filter.course || this.filter.course == '')
      );
      this.scholarshipsFiltered = filter;
      this.orderByUniversityName();
    },
    'filter.type'() {
      const filter = this.scholarships.filter((item) => {
        if (item.course.kind.toUpperCase() == 'PRESENCIAL' && this.filter.type.includes('Presencial'))
          return item.course.kind;
        if (item.course.kind.toUpperCase() == 'EAD' && this.filter.type.includes('A distância'))
          return item.course.kind;
      }
      );
      this.scholarshipsFiltered = filter;
      this.orderByUniversityName();
    },
    'filter.price'() {
      const filter = this.scholarships.filter((item) =>
        (item.price_with_discount <= Number(this.filter.price) || this.filter.price == '')
      );
      this.scholarshipsFiltered = filter;
      this.orderByUniversityName();
    },
  },
  methods: {
    handleCloseModal() {
      this.$store.dispatch('setModal', false);
      this.cleanFields();
    },
    orderByUniversityName() {
      if (this.orderByName) {
        this.scholarshipsFiltered = this.scholarshipsFiltered.sort((a, b) => 
          a.university.name > b.university.name ? 1 : -1
        );
      } else {
        this.scholarshipsFiltered = this.scholarshipsFiltered.sort((a, b) => 
          a.university.name < b.university.name ? 1 : -1
        );
      }
    },
    handleChangeOrdination() {
      this.orderByName = !this.orderByName;
      this.orderByUniversityName();
    },
    handleSelectScholarship(value) {
      if (!this.favoriteScholarshipsSelected.includes(this.scholarshipsFiltered[value])) {
        this.favoriteScholarshipsSelected.push(this.scholarshipsFiltered[value]);
      } else {
        const index = this.favoriteScholarshipsSelected.indexOf(this.scholarshipsFiltered[value]);
        this.favoriteScholarshipsSelected.splice(index, 1);
      }
    },
    handleClickAddFavorite() {
      if (!this.buttonAddActive) return;

      const oldFavorite = this.$store.state.favorite.scholarships;  
      const newFavorite = oldFavorite.concat(this.favoriteScholarshipsSelected);

      this.$store.dispatch('setFavorite', newFavorite);
      this.saveFavoriteOnLocalStorage(newFavorite);
      this.handleCloseModal();
    },
    saveFavoriteOnLocalStorage(favoriteScholarships) {
      window.localStorage.setItem('@quero-bolsa', JSON.stringify(favoriteScholarships));
    },
    cleanFields() {
      this.favoriteScholarshipsSelected = [];
      this.filter = {
        city: '',
        course: '',
        type: ["Presencial", "A distância"],
        price: ''
      };
      this.orderByName = true;
    },
  },
  async mounted() {
    const response = await fetch('db.json');
    this.scholarships = await response.json();
    this.scholarshipsFiltered = this.scholarships;
    this.orderByUniversityName();

    this.cities = Array.from(new Set(this.scholarships.map((item) => item.campus.city)));
    this.courses = Array.from(new Set(this.scholarships.map((item) => item.course.name)));
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba($color: #1F2D30, $alpha: 0.88);
  overflow: scroll;

  &__close {
    color: var(--white);
    padding: 1rem;

    svg {
      display: block;
      height: 2rem;
      width: 2rem;
      margin-left: auto;
    }
  }

  &__content {
    background: var(--white);
    padding: 1rem 1rem 0 1rem;
    margin-bottom: 5rem;

    h1 {
      margin-top: 1rem;
    }

    p {
      line-height: 1.5rem;
    }
  }

  &__result {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 0;

    span {
      font-weight: 500;
    }

    span + span {
      margin-left: auto;
    }
  }

  &__orderby {
    grid-column: 1 / -1;
    font-weight: 500;
    cursor: pointer;
    color: var(--blue-primary);
    text-align: right;
    margin: 0.25rem;
  }

  &__buttons {
    border-top: 2px solid #eeefef;
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  &__cancel {
    padding: 1rem 1.5rem;
    border: 1px solid var(--blue-secondary);
    border-radius: 0.25rem;
    font-family: 'Red Hat Text', sans-serif;
    font-weight: 700;
    color: var(--blue-secondary);
    background: var(--white);
  }

  &__add {
    padding: 1rem 2rem;
    border: 1px solid var(--yellow-secondary);
    border-radius: 0.25rem;
    font-family: 'Red Hat Text', sans-serif;
    font-weight: 700;
    color: var(--black);
    background: var(--yellow-primary);

    &--disabled {
      cursor: not-allowed;
      border-color: var(--black);
      background: #cacdce;
    }
  }
}

@media only screen and (min-width: 720px) {
  .modal {
    &__close {
      max-width: 40rem;
      margin: 3rem auto 0 auto;
      padding-right: 0;
    }

    &__content {
      background: var(--white);
      padding: 1rem 1rem 0 1rem;
      max-width: 40rem;
      margin: 0 auto 5rem auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      h1 {
        grid-column: 1 / -1;
        margin-top: 1rem;
      }

      p {
        grid-column: 1 / -1;
        line-height: 1.5rem;
      }

      & > span {
        grid-column: 1 / -1;
      }
    } 

    &__result {
      grid-column: 1 / -1;
    }

    &__buttons {
      grid-column: 1 / -1;
      justify-content: right;
    }
  }
}
</style>