<template>
  <section class="combo">
    <label for="select" class="combo__text">{{ text }}</label>
    <select name="select" id="select" class="combo__select" v-model='model'>
      <option 
        v-for='(opt, index) in options'
        :value="opt"
        :key='index'
      >
        {{ opt }}
      </option>
    </select>
  </section>
</template>

<script>
export default {
  name: 'ComboSelect',
  props: {
    text: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    model: '',
  }),
  watch: {
    model() {
      this.$emit("update:value", this.model);
    },
  },
}
</script>

<style lang="scss" scoped>
.combo {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;

  &__text {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.675rem;
    margin-bottom: 0.5rem;
  }

  &__select {
    padding: 0.5rem;
    font-family: 'Red Hat Text', sans-serif;
    color: var(--black);
    border-color: #cacdce;
    background: var(--white);
    border-radius: 0.25rem;

    &:focus {
      outline: none;
      border-color: var(--blue-secondary);
    }

    option {
      font-weight: 500;
      color: var(--black);
    }
  }
}
</style>