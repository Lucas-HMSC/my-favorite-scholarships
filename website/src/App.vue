<template>
  <div>
    <Header />
    <NavBar />
    <Breadcrumb />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    NavBar,
    Breadcrumb, 
    Footer,
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

  --white: #FFFFFF;
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

a {
  text-decoration: none;
  color: inherit;
}
</style>
