<template>
  <section class="course">
    <input 
      type="checkbox" 
      :name="'c-index' + value" 
      :id="'c-index' + value" 
      :checked="isChecked"
    >
    <label class="course__label" @click='handleSelectCourse'>
      <img :src="image" :alt="'Logo da ' + universityName" class="course__img">
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
    universityName: {
      type: String,
      required: true,
    },
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
    image: {
      type: String,
      required: true
    },
  },
  computed: {
    scholarshipPerCent() {
      return this.scholarship + '%';
    },
    paymentByMonth() {
      return `${formatMoney(this.payment)}/mês`;
    },
    isModalOpen() {
      return this.$store.state.modal.show;
    },
  },
  watch: {
    isModalOpen() {
      if (!this.isModalOpen) this.isChecked = false;
    },
  },
  data: () => ({
    isChecked: false,
  }),
  methods: {
    handleSelectCourse() {
      this.isChecked = !this.isChecked;
      this.$emit('handleSelectScholarship', this.value);
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

    div {
      display: flex;
      flex-direction: column;
      margin-right: auto;
    }
  }

  &__img {
    max-width: 6rem;
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

@media only screen and (min-width: 720px) {
  .course {
    &__label {
      flex: 1;
      height: 4rem;

      div {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
          'left-top right-top'
          'left-bottom right-bottom';
      }
    }

    &__img {
      width: 6rem;
      max-height: 4rem;
      object-fit: scale-down;
    }

    &__title {
      grid-area: left-top;
    }
    
    &__type {
      grid-area: left-bottom;
    }

    &__percent {
      margin-top: 0;
      margin-left: auto;
      grid-area: right-top;
    }

    &__payment {
      margin-left: auto;
      grid-area: right-bottom;
    }
  }
}
</style>