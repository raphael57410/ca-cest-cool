<template>
  <div class="sideBar-container">
    <div class="sideBar-logo">
      <img
        class="login-logo"
        src="../../assets/logo.png"
        alt="cacestcool-logo"
      />
    </div>
    <div class="sideBar-picture">
      <img
        class="login-logo"
        src="../../assets/logo.png"
        alt="cacestcool-logo"
      />
    </div>
    <h2 class="sideBar-name">
      {{ $store.state.currentUser.firstname }}
      {{ $store.state.currentUser.lastname }}
    </h2>
    <div class="sideBar-link-container">
      <div class="sideBar-link">
        <div class="link" @click="allPost">Mon Mur</div>
        <div class="sideBar-link-number">2</div>
      </div>
      <div class="sideBar-link">
        <a class="link" href="#">Mes Messages</a>
        <div class="sideBar-link-number">3</div>
      </div>
      <div class="sideBar-link">
        <div class="link" @click="filterPost">Mes Post</div>
        <div class="sideBar-link-number">3</div>
      </div>
      <div class="sideBar-link">
        <a class="link" href="#">Mon compte</a>
      </div>
    </div>
    <button-component
      @onClick="deco($router)"
      name="Déconnexion"
      type="button"
      class="sideBar-button"
    ></button-component>
  </div>
</template>

<script>
import ButtonComponent from "@/components/button/Button";
import { fetchAllPostRequest } from "@/requests";

import "./sideBarProfil.css";

export default {
  name: "SideBar",
  data() {
    return {
      firstname: "",
      lastname: "",
    };
  },
  components: {
    "button-component": ButtonComponent,
  },
  methods: {
    deco(router) {
      localStorage.clear();
      this.$store.state.isConnected = false;
      router.push("./");
    },
    filterPost() {
      const test = this.$store.state.allPost.filter(
        (post) => post.user[0]._id == this.$store.state.currentUser._id
      );
      this.$store.state.allPost = test;
    },
    allPost() {
      fetchAllPostRequest();
    },
  },
  created() {},
};
</script>
