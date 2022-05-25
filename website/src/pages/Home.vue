<template>
  <section class="home">
    <h1 class="home__title">Bolsas favoritas</h1>

    <p class="home__text">Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</p>

    <div class="home__filter">
      <a href="#" class="home__link--active">Todos os semestres</a>
      <a href="#">2º semestre de 2019</a>
      <a href="#">1º semestre de 2020</a>
    </div>

    <div class="home__addbox" @click='handleOpenModal'>
      <i class="fa-solid fa-plus"></i>
      <h2>Adicionar bolsa</h2>
      <span>Clique para adicionar bolsas de cursos do seu interesse</span>
    </div>

    <div v-if='showCourseCard'>
      <CourseCard
        v-for='(item, index) in myFavoriteScholarships'
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
        @handleClickExclude='handleClickExclude'
      />
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
  computed: {
    myFavoriteScholarships() {
      return this.$store.state.favorite.scholarships;  
    },
    showCourseCard() {
      return this.myFavoriteScholarships.length > 0;
    },
  },
  methods: {
    handleOpenModal() {
      this.$store.dispatch('setModal', true);
    },
    handleClickExclude(value) {
      this.myFavoriteScholarships.splice(value, 1);
      this.$store.dispatch('setFavorite', this.myFavoriteScholarships);
      this.saveFavoriteOnLocalStorage();
    },      
    saveFavoriteOnLocalStorage() {
      if (window.localStorage.getItem('@quero-bolsa')) {
        window.localStorage.removeItem('@quero-bolsa')
      }

      if (this.myFavoriteScholarships.length > 0) {
        window.localStorage.setItem('@quero-bolsa', JSON.stringify(this.myFavoriteScholarships));
      }
    }  
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