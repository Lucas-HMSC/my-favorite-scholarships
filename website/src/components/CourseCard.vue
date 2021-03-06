<template>
  <section class="card">
    <div class="card__img">
      <img :src="image" :alt="'Logo da ' + universityName">
    </div>

    <p class="card__name">{{ universityName }}</p>
    <p class="card__course">{{ courseName }}</p>
    <Score :score='universityScore' />

    <div class="card__divisor" />

    <div>
      <p class="card__modality">{{ kind }} <span /> {{ shift }}</p>
      <p class="card__info">Início das aulas em: {{ startDate }}</p>
    </div>
    
    <div class="card__divisor" />

    <div class="card__offer">
      <p class="card__payment-title">Mensalidade com o Quero Bolsa:</p>
      <p class="card__full-price">{{ fullPriceFormatted }}</p>
      <p class="card__payment-value"><span>{{ paymentFormatted }}</span> /mês</p>
    </div>

    <div class="card__buttons">
      <button class="card__cancel" @click='handleClickExclude'>
        Excluir
      </button>
      <button class="card__add" v-if='enabled'>
        Ver oferta
      </button>
      <button class="card__add card__add--disabled" v-else>
        Indisponível 
      </button>
    </div> 
</section>
</template>

<script>
import { formatMoney } from '@/utils/helpers.js';

import Score from '@/components/Score.vue';

export default {
  name: 'CourseCard',
  components: {
    Score,
  },
  props: {
    image: {
      type: String,
      required: true
    },
    universityName: {
      type: String,
      required: true
    },
    universityScore: {
      type: Number,
      required: true
    },
    courseName: {
      type: String,
      required: true
    },
    kind: {
      type: String,
      required: true
    },
    shift: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    fullPrice: {
      type: Number,
      required: true
    },
    payment: {
      type: Number,
      required: true
    },
    value: {
      type: Number,
      required: true,
    },
    enabled: {
      type: Boolean,
      required: true
    },
  },
  computed: {
    fullPriceFormatted() {
      return formatMoney(this.fullPrice);
    },
    paymentFormatted() {
      return formatMoney(this.payment);
    },
  },
  methods: {
    handleClickExclude() {
      this.$emit('handleClickExclude', this.value);
    },
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

  &__divisor {
    width: 100%;
    height: 2px;
    background: #eeefef;
    margin: 1rem 0;
  }

  &__info {
    width: 100%;
  }

  &__modality {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.875rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        content: '';
        display: inline-block;
        height: 0.3rem;
        width: 0.3rem;
        background: var(--black);
        border-radius: 50%;
        margin: 0 0.5rem;
      }
    }
  }

  &__info {
    text-align: center;
    margin-top: 1rem;
  }

  &__offer {
    text-align: center;
  }

  &__payment-title {
    font-weight: 700;
  }

  &__full-price {
    margin-top: 1rem;
    text-decoration: line-through;
  }

  &__payment-value {
    margin-top: 0.5rem;
    font-size: 0.875rem;

    span {
      font-size: 1rem;
      font-weight: 700;
      color: var(--green);
    }
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
    padding: 1rem 2rem;
    border: 1px solid var(--yellow-secondary);
    border-radius: 0.25rem;
    font-family: 'Red Hat Text', sans-serif;
    font-weight: 700;
    color: var(--black);
    background: var(--yellow-primary);

    &--disabled {
      cursor: not-allowed;
      border-color: var(--black);
      background: #cacdce;
    }
  }
}

@media only screen and (min-width: 720px) {
  .card {
    &__cancel,
    &__add {
      padding: 1rem;
    }
  }
}
</style>