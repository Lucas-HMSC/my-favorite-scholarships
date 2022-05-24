<template>
  <section class="course">
    <input 
      type="checkbox" 
      name="c-index" 
      id="c-index" 
      :value="value"
    >
    <label for="c-index" class="course__label">
      <img src="https://www.tryimg.com/u/2019/04/16/unip.png" alt="Logo da faculdade" class="course__img">
      <div>
        <h2 class="course__title">{{ title }}</h2>
        <p class="course__type">{{ type }}</p>
        <p class="course__percent">Bolsa de <span>{{ scholarshipPerCent }}</span></p>
        <p class="course__payment">{{ paymentByMonth }}</p>
      </div>
    </label>
  </section>
</template>

<script>
import { formatMoney } from '@/utils/helpers.js';

export default {
  name: 'ComboCourses',
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    scholarship: {
      type: Number,
      required: true
    },
    payment: {
      type: Number,
      required: true,
    },
  },
  computed: {
    scholarshipPerCent() {
      return this.scholarship + '%';
    },
    paymentByMonth() {
      return `${formatMoney(this.payment)}/mês`;
    },
  },
}
</script>

<style lang="scss" scoped>
.course {
  margin: 1rem 0;
  border-top: 2px solid #eeefef;
  padding: 1rem 0;
  display: flex;
  align-items: center;

  &__label {
    display: flex;
    flex: 1;

    div {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }
  }

  &__img {
    height: 1.5rem;
    max-width: 100%;
    margin: auto 1rem;
  }

  &__title {
    font-size: 1rem;
    color: var(--blue-secondary);
  }

  &__percent {
    margin-top: 1rem;

    span {
      font-weight: 700;
      color: var(--green);
    }
  }

  &__payment {
    font-weight: 700;
    color: var(--green);
  }
}
</style>