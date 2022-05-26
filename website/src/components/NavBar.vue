<template>
  <nav 
    class="nav" 
    role="navigation" 
    aria-label="Navegação do site"
    v-if='layoutMobile'
  >
    <a href="#" class="nav__account">
      Minha conta
    </a>
    <a href="#" class="nav__menu">
      <span>Menu</span>
      <i class="fa-solid fa-angle-down"></i>
    </a>
  </nav>

  <nav 
    class="container" 
    role="navigation" 
    aria-label="Navegação do site"
    v-else
  >
    <div class="nav-g">
      <a href="#" class="nav-g__link">
        Minha conta
      </a>
      <a href="#" class="nav-g__link">
        Pré-matrículas
      </a>
      <a href="#" class="nav-g__link nav-g__link--active">
        Bolsas Favoritas
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    layoutMobile() {
      return window.innerWidth < 720;
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  background: var(--blue-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-weight: 500;
  
  &__menu span {
    margin-right: 0.5rem;
  }
}

.container {
  background: var(--blue-primary);

  .nav-g {
    color: white;
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 1rem 1.5rem;
    font-weight: 700;
    max-width: 1240px;
    margin: 0 auto;
    height: 3rem;

    &__link {
      display: inline-block;
      height: 3rem;
      line-height: 3rem;

      &--active {
        background: var(--blue-secondary);
      }
    }

    a + a {
      margin-left: 2rem;
      padding: 0 1rem;
    }
  }
}
</style>