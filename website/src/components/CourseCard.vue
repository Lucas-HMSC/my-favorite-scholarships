<template>
  <section class="card">
    <div class="card__img">
      <img src="https://www.tryimg.com/u/2019/04/16/unip.png" alt="Logo da faculdade">
    </div>

    <p class="card__name">Unip</p>
    <p class="card__course">Sistemas da Informação</p>
    <div class="card__stars">
      3.8 <span></span><i class="fa-solid fa-star"></i>
    </div>
    <div class="card__divisor" />
    <div class="card__info">
      <p class="card__modality">Presencial <span /> Noite</p>
      <p>Início das aulas em: 05/03/2020</p>
    </div>

    <p>Mensalidade com o Quero Bolsa:</p>
    <p>R$ 1.487,98</p>
    <p>R$ 375.80 /mês</p>

    <div class="card__buttons">
      <button class="card__cancel">
        Excluir
      </button>
      <button class="card__add">
        Ver oferta
      </button>
    </div> 
</section>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {

  },
}
</script>

<style lang="scss" scoped>
.card {
  background: var(--white);
  padding: 2rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);

  &__img img {
    height: 3rem;
  }

  &__name {
    font-weight: 700;
    margin-top: 1rem;
    text-transform: uppercase;
  }

  &__course {
    color: var(--blue-secondary);
    font-weight: 700;
    margin-top: 0.5rem;
  }

  &__stars {
    font-weight: 700;
    margin-top: 1rem;
  }

  &__divisor {
    width: 100%;
    height: 2px;
    background: #eeefef;
    margin: 1rem 0;
  }

  &__info {

  }

  &__buttons {
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  &__cancel {
    padding: 1rem 2rem;
    border: 1px solid var(--blue-secondary);
    border-radius: 0.25rem;
    font-family: 'Red Hat Text', sans-serif;
    font-weight: 700;
    color: var(--blue-secondary);
    background: var(--white);
  }

  &__add {
    padding: 1rem 3rem;
    border: 1px solid var(--yellow-secondary);
    border-radius: 0.25rem;
    font-family: 'Red Hat Text', sans-serif;
    font-weight: 700;
    color: var(--black);
    background: var(--yellow-primary);

    &--disabled {
      border-color: var(--black);
      background: #cacdce;
    }
  }
}
</style>