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
        class="sideBar-picture"
        :src="avatar ? 'images/' + avatar : 'images/avatar.png'"
        alt="cacestcool-logo"
      />
    </div>
    <h2 class="sideBar-name">
      {{ firstname }}
      {{ lastname }}
    </h2>
    <div class="sideBar-link-container">
      <div class="sideBar-link">
        <div class="link" @click="allPost">Mon Mur</div>
        <div class="sideBar-link-number">
          {{ this.$store.state.allPostNumber }}
        </div>
      </div>
      <div class="sideBar-link">
        <div class="link" @click="filterPost">Mes Post</div>
        <div class="sideBar-link-number">{{ postNumber }}</div>
      </div>
      <div class="sideBar-link">
        <a class="link" href="/detail">Mon compte</a>
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
      currentUserId: "",
      firstname: "",
      lastname: "",
      avatar: "",
      postNumber: 0,
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
      const userPost = this.$store.state.allPost.filter(
        (post) => post.user[0]._id == this.currentUserId
      );
      this.$store.state.allPost = userPost;
    },
    allPost() {
      fetchAllPostRequest();
    },
  },
  created() {
    fetchAllPostRequest();
    //TODO: voir pour améliorer
    if (this.$store.getters.currentUser.length > 0) {
      this.firstname = this.$store.getters.currentUser[0].firstname;
      this.lastname = this.$store.getters.currentUser[0].lastname;
      this.avatar = this.$store.getters.currentUser[0].profilPicture;
      this.postNumber = this.$store.getters.currentUser[0].posts.length;
      this.currentUserId = this.$store.getters.currentUser[0]._id;
    } else {
      this.firstname = this.$store.getters.currentUser.firstname;
      this.lastname = this.$store.getters.currentUser.lastname;
      this.avatar = this.$store.getters.currentUser.profilPicture;
      this.postNumber = this.$store.getters.currentUser.posts.length;
      this.currentUserId = this.$store.getters.currentUser._id;
    }
  },
};
</script>
