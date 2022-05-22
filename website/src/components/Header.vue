<template>
  <header class="header">
    <div class="header__help">
      <i class="fa-solid fa-circle-info"></i>
      <span>Ajuda</span>
    </div>
    <div class="header__logo">
      <img src="@/assets/logo-querobolsa.svg" alt="Logo da Quero Bolsa">
    </div>
    <div class="header__account">
      <i class="fa-solid fa-circle-user"></i>
      <span>Conta</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 5rem;
  
  &__help {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    padding: 0 1rem;
    border-right: 2px solid #eeefef;
    color: var(--blue-secondary);

    span {
      font-weight: 500;
    }
  }

  &__logo {
    flex: 1;
    padding: 0 3rem;

    img {
      display: block;
      max-width: 100%;
      max-height: 3rem;
      margin: 0 auto;
    }
  }

  &__account {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    padding: 0 1rem;
    border-left: 2px solid #eeefef;
    color: var(--blue-secondary);

    span {
      font-weight: 500;
    }
  }
}
</style>