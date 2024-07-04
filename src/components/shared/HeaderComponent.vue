<template>
  <header>
    <div class="logo-container">
      <div class="image-container">
        <img src="../../assets/images/fitSpirit-logo.png" alt="Logo" />
      </div>
      <span class="association-name">FitSpirit</span>
    </div>
    <nav>
      <ul :class="{ 'nav-links': true, active: isMenuActive }">
        <li><a href="#">Home</a></li>
        <li><a href="#">Iniciatives</a></li>
        <li><a href="#">Backoffice</a></li>
        <li><a href="#">Login</a></li>
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
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2%;
  padding-right: 3%;
  background-color: #333; /*ver*/
}

.logo-container {
  display: flex;
  align-items: center;
}

.image-container {
  height: 6rem;
  width: 6rem;
}

.image-container img {
  height: 100%;
  width: 100%;
}

.association-name {
  font-style: italic;
  font-family: "Times New Roman", Times, serif;
  font-size: 2.3rem;
  color: white;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.hamburger {
  display: none;
  font-size: 24px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 6rem;
    left: 0;
    background-color: #333;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li {
    margin: 0.7rem 0;
    text-align: center;
  }

  .hamburger {
    display: block;
  }
}
</style>
