<template>
  <div class="login-container">
    <div class="login-form-container">
      <div class="login-logo-container">
        <img
          class="login-logo"
          src="../../assets/logo.png"
          alt="cacestcool-logo"
        />
      </div>
      <input-component
        value="email"
        type="text"
        placeholder="email"
      ></input-component>
      <input-component
        value="password"
        type="password"
        placeholder="mot de passe"
      ></input-component>
      <div class="login-button-container">
        <button class="login-button">Se connecter</button>
      </div>
      <a class="login-link" href="#">mot de passe oublié ?</a>
    </div>
  </div>
</template>

<script>
import "./loginPage.css";
import InputComponent from "@/components/input/Input";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    "input-component": InputComponent,
  },
};
</script>
