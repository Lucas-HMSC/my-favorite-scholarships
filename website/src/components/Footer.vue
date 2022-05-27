<template>
  <footer class="footer" v-if='layoutMobile'>
    <div class="footer__whatsapp">
      <i class="fa-brands fa-whatsapp"></i>
      <p>
        <span>0800 123 2222</span>
        Segunda a sexta de 8h às 22h
      </p>
    </div>
    <div class="footer__contact">
      <div>
        <i class="fa-regular fa-comments"></i>
        <span>Chat</span>
      </div>
      <div>
        <i class="fa-regular fa-envelope"></i>
        <span>E-mail</span>
      </div>
      <div>
        <i class="fa-solid fa-info"></i>
        <span>Ajuda</span>
      </div>
    </div>
    <div class="footer__message">
      <p>Feito com &nbsp;<i class="fa-regular fa-heart"></i>&nbsp; pela Quero Educação</p>
    </div>
  </footer>

  <footer class="container" v-else>
    <div class="footer-g">
      <div class="footer-g__whatsapp">
        <i class="fa-brands fa-whatsapp"></i>
        <p>
          <span>0800 123 2222</span>
          Seg - Sex 8h-22h
        </p>
      </div>
      <div class="footer-g__chat">
        <i class="fa-regular fa-comments"></i>
        <p>
          <span>Chat ao vivo</span>
          Seg - Sex 8h-22h
        </p>
      </div>
      <div class="footer-g__email">
        <i class="fa-regular fa-envelope"></i>
        <p>
          <span>Mande um e-mail</span>
          Respondemos rapidinho
        </p>
      </div>
      <div class="footer-g__help">
        <i class="fa-solid fa-info"></i>
        <p>
          <span>Central de Ajuda</span>
          Encontre todas as respostas
        </p>
      </div>
    </div>
    
    <div class="footer-g__message">
      <p>Feito com &nbsp;<i class="fa-regular fa-heart"></i>&nbsp; pela Quero Educação</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    layoutMobile() {
      return window.innerWidth < 720;
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background: var(--blue-secondary);
  display: flex;
  flex-direction: column;
  color: var(--white);

  &__whatsapp {
    padding: 1rem;
    border-bottom: 2px solid #0e899d;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    svg {
      height: 2.5rem;
      width: 2.5rem;
    }

    p {
      display: flex;
      flex-direction: column;
      
      span {
        font-weight: 700;
      }
    }
  }

  &__contact {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      gap: 0.5rem;
    }

    div + div {
      border-left: 2px solid #0e899d;
    }

    svg {
      height: 2rem;
      width: 2rem;
    }

    span {
      font-weight: 500;
    }
  }

  &__message {
    background: var(--blue-primary);
    padding: 2rem;
    
    p {
      text-align: center;
      font-weight: 500;
    }

    svg {
      animation: scaleUp 0.5s linear infinite alternate;
    }
  }
}

@keyframes scaleUp {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}

.container {
  background: var(--blue-secondary);

  .footer-g {
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    color: var(--white);

    &__whatsapp,
    &__email,
    &__chat,
    &__help {
      padding: 2rem 1rem;
      border-bottom: 2px solid #0e899d;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      svg {
        height: 2.5rem;
        width: 2.5rem;
      }

      p {
        display: flex;
        flex-direction: column;
        
        span {
          font-weight: 700;
        }
      }
    }

    &__message {
      background: var(--blue-primary);
      padding: 2rem;
      color: var(--white);
      
      p {
        text-align: center;
        font-weight: 500;
      }

      svg {
        animation: scaleUp 0.5s linear infinite alternate;
      }
    }
  }
}
</style>