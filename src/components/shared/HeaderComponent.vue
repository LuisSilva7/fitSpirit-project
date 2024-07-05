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
  padding-left: 10%;
  padding-right: 11%;
  background-color: #505050a2;
  z-index: 1000;
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
  font-size: 1.1rem;
}

.hamburger {
  display: none;
  font-size: 2.3rem;
  cursor: pointer;
}

@media (max-width: 850px) {
  header {
    background-color: #ffffff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.151);
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .image-container {
    display: none;
  }

  .association-name {
    font-style: normal;
    font-weight: 600;
    font-size: 2.3rem;
    color: black;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    position: absolute;
    top: 6rem;
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
    padding: 0.7rem 0;
    text-align: center;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.151);
    border-left: 1px solid rgba(0, 0, 0, 0.151);
    border-right: 1px solid rgba(0, 0, 0, 0.151);
    border-bottom: 1px solid rgba(0, 0, 0, 0.151);
    transition: opacity 0.5s ease-out;
  }

  .nav-links.active li {
    opacity: 1;
  }

  .nav-links a {
    color: black;
    font-size: 1rem;
  }

  .hamburger {
    display: block;
  }
}
</style>
