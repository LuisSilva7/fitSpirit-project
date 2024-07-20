<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="logo-container">
      <span class="association-name">FitSpirit</span>
    </div>
    <nav>
      <ul :class="{ 'nav-links': true, active: isMenuActive }">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/iniciatives" exact>Iniciatives</router-link></li>
        <li><router-link to="/about" exact>About</router-link></li>
        <li><router-link to="/backoffice">Backoffice</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
      <div class="hamburger" @click="toggleMenu">&#9776;</div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Overpass:ital,wght@0,100..900;1,100..900&display=swap");

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20%;
  padding-right: 21%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.089);
  z-index: 1000;
  position: fixed;
  width: 100%;
  transition: background-color 0.3s, color 0.3s;
  height: 4rem;
}

.logo-container {
  display: flex;
  align-items: center;
}

.association-name {
  font-family: "Overpass", sans-serif;
  font-size: 1.5rem;
  color: black;
  font-weight: 700;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a {
  color: black;
  text-decoration: none;
  font-size: 1rem;
  font-family: "Overpass", sans-serif;
}

.hamburger {
  display: none;
  font-size: 2.3rem;
  cursor: pointer;
}

.nav-links a.router-link-active {
  color: rgb(248, 111, 45);
}

@media (max-width: 1000px) {
  header {
    background-color: #ffffff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.151);
    padding-left: 5%;
    padding-right: 6%;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    height: 3rem;
  }

  .image-container {
    display: none;
  }

  .association-name {
    font-size: 2rem;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    position: absolute;
    top: 2.9rem;
    left: 0;
    right: 0;
    background-color: #ffffff;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
  }

  .nav-links.active {
    max-height: 500px;
  }

  .nav-links li {
    opacity: 0;
    padding: 0.3rem 0;
    text-align: center;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.151);
    transition: opacity 0.5s ease-out;
  }

  .nav-links.active li {
    opacity: 1;
  }

  .nav-links a {
    font-size: 1rem;
  }

  .hamburger {
    display: block;
    font-size: 1.8rem;
  }
}
</style>
