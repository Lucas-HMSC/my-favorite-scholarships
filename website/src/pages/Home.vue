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

    <CourseCard 
      image='https://www.tryimg.com/u/2019/04/16/anhembi-morumbi.png'
      universityName='Anhembi Morumbi'
      :universityScore='4.2'
      courseName='Jornalismo'
      kind='Presencial'
      shift='Noite'
      startDate='01/08/2019'
      :fullPrice='1461.16'
      :payment='1241.99'
    />

    <CourseCard 
      image='https://www.tryimg.com/u/2019/04/16/anhembi-morumbi.png'
      universityName='Anhembi Morumbi'
      :universityScore='4.2'
      courseName='Jornalismo'
      kind='Presencial'
      shift='Noite'
      startDate='01/08/2019'
      :fullPrice='1461.16'
      :payment='1241.99'
    />

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
  computed: {},
  data: () => ({
    scholarships: [],
  }),
  methods: {
    handleOpenModal() {
      this.$store.dispatch('setModal', true);
    },
  },
  async mounted() {
    const response = await fetch('db.json');
    this.scholarships = await response.json();
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