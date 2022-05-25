<template>
  <section class="combo">
    <label class="combo__text">{{ text }}</label>
    <span class="combo__limit">{{ valueNumber }}</span>
    <input 
      type="range" 
      id="limit" 
      name="limit" 
      min="1" 
      :max="limit"
      v-model='valueModel'
    >
  </section>
</template>

<script>
import { formatMoney } from '@/utils/helpers.js';

export default {
  name: 'ComboRange',
  props: {
    text: {
      type: String,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    valueModel: '0',
    valueNumber: 0,
  }),
  watch: {
    valueModel() {
      this.valueNumber = formatMoney(Number(this.valueModel));
      this.$emit("update:value", this.valueModel);
    },
  },
}
</script>

<style lang="scss" scoped>
.combo {
  display: flex;
  flex-direction: column;

  &__text {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.675rem;
  }

  &__limit {
    margin: 0.25rem 0;
  }

  input[type=range] {
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    background: var(--blue-primary);
    height: 0.2rem;
    border-radius: 0.2rem;
    margin: 1.5rem 0;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: 0.2rem solid var(--blue-primary);
      background: var(--white);
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
    }
  }
}
</style>