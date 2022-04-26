<template>
  <div v-if="$store.getters.isConnected" class="profil-container">
    <side-bar />
    <main class="main-profil-container">
      <loader-component v-if="$store.state.loader"></loader-component>
      <div class="main-container">
        <h1 class="main-title">Mon Mur</h1>
        <button-component
          name="Ajouter un Post"
          type="button"
          @onClick="$router.push('./formulaire')"
        ></button-component>
        <post-card
          @showPost="showPostfunc(post)"
          v-for="post in $store.getters.allPost"
          :post="post"
          :key="post._id"
        />
      </div>
    </main>
    <detail-post-card v-if="showPost" :post="currentPost"></detail-post-card>
  </div>
</template>

<script>
import "./profilPage.css";
import SideBarProfil from "@/components/sideBarProfil/SideBarProfil";
import PostCard from "@/components/postCard/PostCard";
import ButtonComponent from "@/components/button/Button";
import LoaderComponent from "@/components/loader/Loader";
import DetailPostCard from "@/components/detailPostCard/DetailPostCard";

import { fetchAllPostRequest } from "@/requests";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      showPost: false,
      currentPost: undefined,
    };
  },
  created() {
    if (this.$store.state.isConnected) fetchAllPostRequest();
    this.initCurrentUser();
  },
  components: {
    "side-bar": SideBarProfil,
    "post-card": PostCard,
    "button-component": ButtonComponent,
    "loader-component": LoaderComponent,
    "detail-post-card": DetailPostCard,
  },
  methods: {
    ...mapActions(["initCurrentUser"]),

    showPostfunc(currentPost) {
      this.showPost = !this.showPost;
      // format date
      const date = currentPost.postCreated
        .split("T")[0]
        .split("-")
        .reverse()
        .join("-");
      currentPost.postCreated = date;

      this.currentPost = currentPost;
    },
  },
};
</script>
