<template>
  <section class="home">
    <h1 class="home__title">Bolsas favoritas</h1>

    <p class="home__text">Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</p>

    <div class="home__filter">
      <a
        v-for='(item) in semesters'
        href='#'
        :key='item.id'
        :class="item.isActive ? 'home__link--active' : ''"
        @click='handleFilterBySemester(item.id)'
        role="navigation"
      >{{ item.title }}</a>
    </div>

    <div class="home__addbox" @click='handleOpenModal'>
      <i class="fa-solid fa-plus"></i>
      <h2>Adicionar bolsa</h2>
      <span>Clique para adicionar bolsas de cursos do seu interesse</span>
    </div>

    <div v-show='showCourseCard'>
      <TransitionGroup> 
        <CourseCard
          v-for='(item, index) in myFavoriteScholarshipsFiltered'
          :key='index'
          :value='index'
          :image='item.university.logo_url'
          :universityName='item.university.name'
          :universityScore='item.university.score'
          :courseName='item.course.name'
          :kind='item.course.kind'
          :shift='item.course.shift'
          :startDate='item.start_date'
          :fullPrice='item.full_price'
          :payment='item.price_with_discount'
          :enabled='item.enabled'
          @handleClickExclude='handleClickExclude'
        />
      </TransitionGroup>
    </div>

    <Modal />
  </section>
</template>

<script>
import Modal from '@/components/Modal.vue';
import CourseCard from '@/components/CourseCard.vue';

export default {
  name: 'Home',
  components: {
    Modal,
    CourseCard
  },
  data: () => ({
    myFavoriteScholarshipsFiltered: [],
    semesters: [
      {
        id: 1,
        title: 'Todos os semestres',
        filter: 'all',
        isActive: true
      },
      {
        id: 2,
        title: '2º semestre de 2019',
        filter: '2019.2',
        isActive: false
      },
      {
        id: 3,
        title: '1º semestre de 2020',
        filter: '2020.1',
        isActive: false
      }
    ],
  }),
  computed: {
    myFavoriteScholarships() {
      return this.$store.state.favorite.scholarships;  
    },
    showCourseCard() {
      return this.myFavoriteScholarships.length > 0;
    },
  },
  watch: {
    myFavoriteScholarships() {
      this.myFavoriteScholarshipsFiltered = this.myFavoriteScholarships;
    },
  },
  methods: {
    handleOpenModal() {
      this.$store.dispatch('setModal', true);
    },
    handleClickExclude(value) {
      const index = this.myFavoriteScholarships.findIndex((object) => object === this.myFavoriteScholarshipsFiltered[value]);
      this.myFavoriteScholarships.splice(index, 1);
      this.$store.dispatch('setFavorite', this.myFavoriteScholarships);
      this.saveFavoriteOnLocalStorage();

      this.resetOrderBySemester();
    },      
    saveFavoriteOnLocalStorage() {
      if (window.localStorage.getItem('@quero-bolsa')) {
        window.localStorage.removeItem('@quero-bolsa')
      }

      if (this.myFavoriteScholarships.length > 0) {
        window.localStorage.setItem('@quero-bolsa', JSON.stringify(this.myFavoriteScholarships));
      }
    },
    handleFilterBySemester(id) {
      this.myFavoriteScholarshipsFiltered = this.myFavoriteScholarships;

      this.semesters.forEach((item) => {
        if (item.id === id) item.isActive = true;
        else item.isActive = false;
      });

      const index = this.semesters.findIndex((item) => item.id === id);
      const filterActive = this.semesters[index].filter;
      
      if (filterActive === 'all') return;

      this.myFavoriteScholarshipsFiltered = this.myFavoriteScholarships.filter((item) => item.enrollment_semester === filterActive);
    },
    resetOrderBySemester() {
      this.semesters[0].isActive = true;
      this.semesters[1].isActive = false;
      this.semesters[2].isActive = false;
    },
  },
  mounted() {
    const favoriteScholarships = window.localStorage.getItem('@quero-bolsa');
    if (favoriteScholarships) {
      this.$store.dispatch('setFavorite', JSON.parse(favoriteScholarships));
    } 
  },
}
</script>
<style lang="scss" scoped>
.home {
  padding: 0 1rem;

  &__title {
    padding: 0.5rem 0;
  }

  &__text {
    line-height: 1.5rem;
  }

  &__filter {
    margin: 1rem 0;
    background: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--blue-secondary);
    border-radius: 0.25rem;
    color: var(--blue-secondary);

    a {
      display: block;
      width: 100%;
      padding: 1rem 0;
      font-weight: 700;
      text-align: center;
    }

    a + a {
      border-top: 1px solid var(--blue-secondary);
    }
  }

  &__link--active {
    color: var(--white);
    background: var(--blue-secondary);
    transition: background 0.3s;
  }

  &__addbox {
    background: var(--white);
    padding: 2rem;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);

    svg {
      color: var(--blue-primary);
      width: 4rem;
      height: 4rem;
      margin-bottom: 1rem;
    }

    span {
      padding: 0 2rem;
      text-align: center;

    }
  }
}
</style>