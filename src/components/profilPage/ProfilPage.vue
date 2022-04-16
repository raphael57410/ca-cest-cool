<template>
  <div v-if="$store.state.isConnected" class="profil-container">
    <side-bar />
    <main class="main-profil-container">
      <div class="main-container">
        <h1 class="main-title">Mon Mur</h1>
        <button-component
          name="Ajouter un Post"
          type="button"
          @onClick="$router.push('./formulaire')"
        ></button-component>
        <post-card
          v-for="post in $store.state.allPost"
          :post="post"
          :key="post._id"
        />
      </div>
    </main>
  </div>
</template>

<script>
import "./profilPage.css";
import SideBarProfil from "@/components/sideBarProfil/SideBarProfil";
import PostCard from "@/components/postCard/PostCard";
import ButtonComponent from "@/components/button/Button";
import { fetchAllPostRequest } from "@/requests";

export default {
  data() {
    return {};
  },
  created() {
    if (this.$store.state.isConnected)
      fetchAllPostRequest(this.$store.dispatch);
  },
  components: {
    "side-bar": SideBarProfil,
    "post-card": PostCard,
    "button-component": ButtonComponent,
  },
  methods: {},
};
</script>
