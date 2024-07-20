<template>
  <div class="stats-and-actions-grid" id="proposalsStart">
    <div class="stats-container">
      <p class="stats-top-text">Interacted With Over</p>
      <p class="stats-main-text">15,000</p>
      <p class="stats-bottom-text">People all around the world</p>
    </div>
    <div class="propose-colaborator-container">
      <p class="propose-title">Be a Volunteer</p>
      <p class="propose-text">
        Join us as a volunteer and make a difference in other lifes!
      </p>
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
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
  <p>d</p>
</template>

<script>
export default {};
</script>

<style scoped>
.stats-and-actions-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  width: 90%;
  margin: 4rem auto;
  font-family: "Overpass", sans-serif;
  font-weight: 300;
}

.stats-container {
  background-color: rgb(248, 111, 45);
  padding: 3rem;
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
  padding: 3rem;
}

.propose-iniciative-container {
  background-color: rgb(250, 170, 58);
  padding: 3rem;
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
  transition: all 0.2s;
}

.propose-button:hover {
  background-color: black;
  color: white;
}

@media (min-width: 850px) {
  .stats-and-actions-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    width: 70%;
  }
}
</style>
