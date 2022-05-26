<template>
  <nav class="nav" role="navigation">
    <a href="#" class="nav__account">
      Minha conta
    </a>
    <a href="#" class="nav__menu">
      <span>Menu</span>
      <i class="fa-solid fa-angle-down"></i>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
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
</style>