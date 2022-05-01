<template>
  <div v-if="!$store.getters.isConnected" class="login-container">
    <loader-component v-if="$store.state.loader"></loader-component>
    <form
      v-else
      v-on:submit.prevent="
        () => {
          login({ email, password });
          email = '';
          password = '';
        }
      "
      method="POST"
      class="login-form-container"
    >
      <div class="login-logo-container">
        <img
          class="login-logo"
          src="../../assets/logo.png"
          alt="cacestcool-logo"
        />
      </div>
      <input-component
        v-model="email"
        type="text"
        placeholder="email"
      ></input-component>
      <input-component
        v-model="password"
        type="password"
        placeholder="mot de passe"
      ></input-component>
      <div v-if="$store.state.loginMessage" class="login-message">
        {{ $store.state.loginMessage }}
      </div>
      <div class="login-button-container">
        <button type="submit" class="login-button">Se connecter</button>
      </div>
      <a class="login-link" href="/inscription">Vous avez pas de compte?</a>
      <a class="login-link" href="#">mot de passe oublié ?</a>
    </form>
  </div>
</template>

<script>
import "./loginPage.css";
import InputComponent from "@/components/input/Input";
import LoaderComponent from "@/components/loader/Loader";

import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    "input-component": InputComponent,
    "loader-component": LoaderComponent,
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
