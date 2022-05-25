<template>
  <section class="combo">
    <p class="combo__text">{{ text }}</p>
    <div class="combo__checkbox">
      <input 
        type="checkbox" 
        name="opt1" 
        id="opt1" 
        @click='handleSelect(options[0])'
        checked
      >
      <label for="opt1">{{ options[0] }}</label>
    </div>
    <div class="combo__checkbox">
      <input 
        type="checkbox" 
        name="opt2" 
        id="opt2" 
        @click='handleSelect(options[1])'
        checked
      >
      <label for="opt2">{{ options[1] }}</label>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComboCheckbox',
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
      type: Array,
      required: true,
    },
  },
  data: () => ({
    model: [],
  }),
  watch: {
    model() {
      this.$emit("update:value", this.model);
    },
  },
  methods: {
    handleSelect(value) {
      if (!this.model.includes(value)) this.model.push(value);
      else this.model = this.model.filter((item) => item != value);
    }
  },
  mounted() {
    this.model = this.value;
  },
}
</script>

<style lang="scss" scoped>
.combo {
  display: grid;
  grid-template-columns: 1fr 1fr;

  &__text {
    grid-column: 1 / -1;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.675rem;
    margin-bottom: 1rem;
  }

  &__checkbox {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    label {
      margin-left: 0.5rem;
    }
  }
}
</style>