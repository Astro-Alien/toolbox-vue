<script setup>
</script>

<template>
  <header>
        <h1>Toolbox</h1>
  </header>

  <main>
        <h1>Welcome To the toolbox Vue.js version</h1>
  </main>

  <footer>&copy; charleslemmert-toolbox-vuejs </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
