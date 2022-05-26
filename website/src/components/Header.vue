<template>
  <header class="header" v-if='layoutMobile'>
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
  
  <header class="header-g" v-else>
    <div class="header-g__container">
      <div class="header-g__help">
        <i class="fa-solid fa-circle-info"></i>
        <span>Como funciona</span>
      </div>
      <div class="header-g__whatsapp">
        <i class="fa-brands fa-whatsapp"></i>
        <p>
          <span>0800 123 2222</span>
          Envie mensagem ou ligue
        </p>
      </div>
    </div>

    <div class="header-g__logo">
      <img src="@/assets/logo-querobolsa.svg" alt="Logo da Quero Bolsa">
    </div>

    <div class="header-g__account">
      <span>Lucas Carvalho</span>
      <i class="fa-solid fa-circle-user"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    layoutMobile() {
      return window.innerWidth < 720;
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 5rem;
  background: #FFFFFF;
  
  &__help {
    display: flex;
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

.header-g {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 5rem;
  background: #FFFFFF;
  padding: 1rem 0;

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__help {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    padding: 1rem 1.5rem 1rem 1rem;
    border-right: 2px solid #eeefef;
    color: var(--blue-secondary);

    span {
      font-weight: 500;
      margin-left: 0.5rem;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  &__whatsapp {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      height: 1.5rem;
      width: 1.5rem;
      color: var(--green);
    }

    p {
      display: flex;
      flex-direction: column;
      color: var(--blue-secondary);
      
      span {
        font-weight: 700;
      }
    }
  }

  &__logo {
    flex: 1;

    img {
      display: block;
      max-width: 100%;
      max-height: 3rem;
      margin: 0 auto;
    }
  }

  &__account {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    color: var(--blue-secondary);

    span {
      font-weight: 500;
      margin-right: 0.5rem;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>