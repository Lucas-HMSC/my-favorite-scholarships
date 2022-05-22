<template>
  <div>
    <Header />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --blue-primary: #18ACC4;
  --blue-secondary: #007A8D;

  --yellow-primary: #FDCB13;
  --yellow-secondary: #DE9E1F;

  --green: #0FA866;

  --black: #1F2D30;

  --gray: #FBFBFB;

  --overlay: #1F2D30;
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%; 
  }  
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%; 
  }  
}

body {
  background: var(--gray);
}

body, button {
  font-family: 'Red Hat Text', sans-serif;
  color: var(--black);
}

button {
  cursor: pointer;
}
</style>
