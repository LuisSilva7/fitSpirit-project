<template>
  <div class="hero-container">
    <div class="image">
      <img src="../../assets/images/teste.jpg" alt="Hero Image" />
    </div>
    <div class="hero-text">
      <h2>Doing Nothing is Not An Option of Our Life</h2>
      <button>JOIN US NOW!</button>
    </div>
  </div>
  <div class="stats-and-actions-grid">
    <div class="stats-container">
      <p class="stats-top-text">Interacted With Over</p>
      <p class="stats-main-text">15,000</p>
      <p class="stats-bottom-text">People all around the world</p>
    </div>
    <div class="propose-colaborator-container">
      <p class="propose-title">Be a Volunteer</p>
      <p class="propose-text">Join us as a volunteer and make a difference!</p>
      <button class="propose-button">Propose Now</button>
    </div>
    <div class="propose-iniciative-container">
      <p class="propose-title">Propose an Iniciative</p>
      <p class="propose-text">
        Have an idea? Propose your initiative and collaborate with us!
      </p>
      <button class="propose-button">Be a Volunteer</button>
    </div>
  </div>
</template>

<script>
export default {};
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
  height: 95vh;
}

.image {
  width: 100%;
  height: 100%;
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

.stats-and-actions-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  width: 90%;
  margin: 0 auto;
  font-family: "Overpass", sans-serif;
  font-weight: 300;
}

.stats-container {
  background-color: rgb(248, 111, 45);
  padding: 2rem;
}

.stats-top-text {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.stats-main-text {
  font-size: 3.8rem;
  margin-bottom: 1rem;
}

.stats-bottom-text {
  font-size: 1.4rem;
}

.propose-colaborator-container {
  background-color: rgb(250, 143, 61);
  padding: 2rem;
}

.propose-iniciative-container {
  background-color: rgb(250, 170, 58);
  padding: 2rem;
}

.propose-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.propose-text {
  margin-bottom: 1.5rem;
}

.propose-button {
  padding: 0.8rem 1rem;
  border: none;
  background-color: white;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.39);
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
