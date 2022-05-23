<template>
  <section class="modal" v-show='modal'> 
    <div class="modal__close" @click='handleCloseModal'>
      <i class="fa-solid fa-xmark"></i>
    </div>
    <div class="modal__content">
      <h1>Adicionar bolsa</h1>
      <p>Filtre e adicione as bolsas de seu interesse.</p>

      <ComboSelect 
        text='Selecione sua cidade'
        :options='["São José dos Campos", "Jacareí"]'
      />

      <ComboSelect 
        text='Selecione o curso de sua preferência'
        :options='["Ciência da Computação", "Psicologia"]'
      />

      <ComboCheckbox
        text='Como você quer estudar?'
        :options='["Presencial", "A distância"]'
      />

      <ComboRange
        text='Até quanto pode pagar?'
        :limit='10000'
      />
    </div>
  </section>
</template>

<script>
import ComboSelect from '@/components/ComboSelect.vue';
import ComboCheckbox from '@/components/ComboCheckbox.vue';
import ComboRange from '@/components/ComboRange.vue';

export default {
  name: 'Modal',
  components: {
    ComboSelect,
    ComboCheckbox,
    ComboRange
  },
  computed: {
    modal() {
      return this.$store.state.modal.show;
    },
  },
  methods: {
    handleCloseModal() {
      this.$store.dispatch('setModal', false);
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba($color: #1F2D30, $alpha: 0.88);
  overflow: auto;

  &__close {
    color: var(--white);
    padding: 1rem;

    svg {
      display: block;
      height: 2rem;
      width: 2rem;
      margin-left: auto;
    }
  }

  &__content {
    background: var(--white);
    padding: 1rem;

    h1 {
      margin-top: 1rem;
    }

    p {
      line-height: 1.5rem;
    }
  }
}
</style>