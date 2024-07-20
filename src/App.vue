<template>
  <div id="app">
    <HeaderComponent />
    <main>
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/shared/HeaderComponent.vue";
import FooterComponent from "./components/shared/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  margin-top: 4rem;
  flex: 1;
}

@media (max-width: 1000px) {
  main {
    margin-top: 3rem;
  }
}
</style>
