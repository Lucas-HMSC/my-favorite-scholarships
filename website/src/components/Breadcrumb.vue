<template>
  <section 
    class="breadcrumb" 
    role="navigation"
    aria-label="Indicação da navegação do site (breadcrumb)"
    v-if='layoutMobile'
  >
    <i class="fa-solid fa-angle-left"></i>
    <span class="breadcrumb__text">
      Minha conta
    </span>
  </section>

  <section 
    class="breadcrumb-g" 
    role="navigation"
    aria-label="Indicação da navegação do site (breadcrumb)"
    v-else
  >
    <span class="breadcrumb-g__text">
      Home
    </span>
    <span class="breadcrumb-g__text">
      Minha conta
    </span>
    <span class="breadcrumb-g__text breadcrumb-g__text--active">
      Bolsas favoritas
    </span>
  </section>
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    layoutMobile() {
      return window.innerWidth < 720;
    },
  },
}
</script>

<style lang="scss" scoped> 
.breadcrumb {
  padding: 1rem;
  color: var(--blue-secondary);

  &__text {
    font-weight: 500;
    margin-left: 0.5rem;
  }
}

.breadcrumb-g {
  padding: 1rem 1.5rem;
  color: var(--blue-secondary);
  max-width: 1240px;
  margin: 0 auto;

  &__text {
    font-weight: 500;

    & + &:before {  
      content: '/';
      display: inline-block;
      margin: 0 1rem;
    }

    &--active {
      color: var(--black);
    }
  }
}
</style>