<template>
  <div class="score">
    <span class="score__number">{{ score }}</span> 
    <span class="score__container">
      <span  
        class="score__content" 
        :style="{ width: goldenStars }"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 'Score',
  props: {
    score: {
      type: Number,
      required: true
    },
  },
  data: () => ({
    max: 5
  }),
  computed: {
    goldenStars() {
      return `${Math.round(this.score / this.max * 10) * 10}%`;
    },
  },
}
</script>

<style lang="scss" scoped>
.score {
  font-weight: 700;
  margin-top: 1rem;
  display: flex;
  align-items: center;

  &__number {
    display: inline-block;
    margin-right: 0.5rem;
  }

  &__container {
    display: inline-block;
    position: relative;
    font-family: FontAwesome;

    &:before {
      content: "\f006    \f006    \f006    \f006    \f006";
      color: var(--yellow-primary);
    }
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;

    &:before {
      content: "\f005    \f005    \f005    \f005    \f005";
      color: var(--yellow-primary);
    }
  }
}
</style>