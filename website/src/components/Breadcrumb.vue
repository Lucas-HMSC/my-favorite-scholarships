<template>
  <section class="breadcrumb" role="navigation">
    <i class="fa-solid fa-angle-left"></i>
    <span class="breadcrumb__text">
      Minha conta
    </span>
  </section>
</template>

<script>
export default {
  name: 'Breadcrumb'
}
</script>

<style lang="scss" scoped> 
.breadcrumb {
  padding: 1rem;
  color: var(--blue-secondary);

  &__text {
    font-weight: 500;
    margin-left: 0.5rem;
  }
}
</style>