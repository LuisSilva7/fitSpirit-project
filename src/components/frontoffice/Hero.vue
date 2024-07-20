<template>
  <div class="hero-container">
    <div class="image">
      <img src="../../assets/images/hero-image.jpg" alt="Hero Image" />
    </div>
    <div class="overlay"></div>
    <div class="hero-text">
      <h2>Doing Nothing is Not An Option of Our Life</h2>
      <button @click="scrollToProposals">JOIN US NOW!</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToProposals() {
      const proposalComponent = document.getElementById("proposalsStart");
      proposalComponent.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Overpass:ital,wght@0,100..900;1,100..900&display=swap");

.hero-container {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

.image {
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.137);
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-text {
  position: absolute;
  top: 35%;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-text h2 {
  color: white;
  font-family: "Dosis", sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
}

.hero-text button {
  margin-top: 1rem;
  background-color: rgba(161, 44, 48, 0);
  padding: 1rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.664);
  color: white;
  font-weight: 500;
  transition: all 0.5s ease;
}

.hero-text button:hover {
  background-color: rgb(255, 255, 255);
  border: none;
  color: rgb(248, 111, 45);
}

@media (min-width: 850px) {
  .stats-and-actions-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    width: 70%;
  }
}

@media (min-width: 1400px) {
  .hero-text {
    top: 30%;
  }

  .hero-text h2 {
    width: 35rem;
    font-size: 3.5rem;
  }
}
</style>
