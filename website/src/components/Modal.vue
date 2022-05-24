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

      <div class="modal__result">
        <span>Resultado:</span>
        <span>Ordenar por</span>
        <a class="modal__orderby">Nome da Faculdade <i class="fa-solid fa-angle-down"></i></a>
      </div>

      <ComboCourses 
        title='Sistema da Informação'
        type='Bacharelado'
        :value='0'
        :scholarship='50'
        :payment='374'
      />

      <ComboCourses 
        title='Sistema da Informação'
        type='Bacharelado'
        :value='0'
        :scholarship='50'
        :payment='374'
      />

      <div class="modal__buttons">
        <button class="modal__cancel">
          Cancelar
        </button>
        <button class="modal__add modal__add--disabled">
          Adicionar bolsa(s)
        </button>
      </div>  
    </div>
  </section>
</template>

<script>
import ComboSelect from '@/components/ComboSelect.vue';
import ComboCheckbox from '@/components/ComboCheckbox.vue';
import ComboRange from '@/components/ComboRange.vue';
import ComboCourses from '@/components/ComboCourses.vue';

export default {
  name: 'Modal',
  components: {
    ComboSelect,
    ComboCheckbox,
    ComboRange,
    ComboCourses
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
  overflow: scroll;

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
    padding: 1rem 1rem 0 1rem;
    margin-bottom: 5rem;

    h1 {
      margin-top: 1rem;
    }

    p {
      line-height: 1.5rem;
    }
  }

  &__result {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 0;

    span {
      font-weight: 500;
    }

    span + span {
      margin-left: auto;
    }
  }

  &__orderby {
    grid-column: 1 / -1;
    font-weight: 500;
    cursor: pointer;
    color: var(--blue-primary);
    text-align: right;
    margin: 0.25rem;
  }

  &__buttons {
    border-top: 2px solid #eeefef;
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  &__cancel {
    padding: 1rem 1.5rem;
    border: 1px solid var(--blue-secondary);
    border-radius: 0.25rem;
    font-family: 'Red Hat Text', sans-serif;
    font-weight: 500;
    color: var(--blue-secondary);
    background: var(--white);
  }

  &__add {
    padding: 1rem 2rem;
    border: 1px solid var(--yellow-secondary);
    border-radius: 0.25rem;
    font-family: 'Red Hat Text', sans-serif;
    font-weight: 500;
    color: var(--black);
    background: var(--yellow-primary);

    &--disabled {
      border-color: var(--black);
      background: #cacdce;
    }
  }
}
</style>