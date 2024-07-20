<template>
  <div class="page-container">
    <div class="login-container">
      <div class="left-section">
        <div class="image-container">
          <img src="../../assets/images/login-image.jpg" />
        </div>
      </div>
      <div class="right-section">
        <h2 class="title">Welcome to FitSpirit</h2>
        <div class="input-fields">
          <input type="text" placeholder="Email" v-model="email" />
          <input type="password" placeholder="Password" v-model="password" />
        </div>
        <button @click="login" class="login-button">LOGIN</button>
        <router-link to="/signup" class="signup-link"
          >Don't have an account yet? Sign up now!</router-link
        >
        <div @click="signInWithGoogle" class="google-container">
          <div class="google-icon-container">
            <img src="../../assets/images/google-icon.webp" />
          </div>
          <p>Google</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background: linear-gradient(
    to bottom left,
    rgb(218, 101, 43),
    rgb(223, 132, 62)
  );
}

.login-container {
  display: flex;
  height: 60%;
  width: 45%;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #feb47b4f;
  border: 4px solid rgba(212, 139, 69, 0.555);
}

.left-section {
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.image-container {
  width: 80%;
  height: 80%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right-section {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
}

.title {
  font-size: 1.1rem;
}

.input-fields {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
  width: 70%;
}

.input-fields input {
  width: 100%;
  padding: 0 1rem;
  background-color: rgb(230, 230, 230);
  border: none;
  border-radius: 20px;
  height: 2.3rem;
}

.login-button {
  margin-top: 1rem;
  width: 70%;
  padding: 0 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  background-color: rgb(250, 170, 58);
  border: none;
  border-radius: 20px;
  height: 2.3rem;
}

.signup-link {
  margin-top: 0.2rem;
  width: 70%;
  text-align: center;
  font-size: 0.7rem;
  color: black;
}

.google-container {
  margin-top: 2.5rem;
  width: 70%;
  padding: 0 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.075);
  border-radius: 20px;
  height: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.3rem;
  cursor: pointer;
}

.google-icon-container {
  height: 100%;
}

.google-icon-container img {
  width: 100%;
  height: 100%;
}

.google-container p {
  color: black;
  font-size: 1.1rem;
}
</style>
