<template>
  <div v-if="$store.state.isConnected" class="profil-container">
    <side-bar />
    <main class="main-profil-container">
      <div class="main-container">
        <h1 class="main-title">Mon Mur</h1>
        <button-component
          name="Ajouter un Post"
          @onClick="$router.push('./formulaire')"
        ></button-component>
        <post-card />
        <post-card />
        <post-card />
        <post-card />
        <post-card />
        <post-card />
        <post-card />
      </div>
    </main>
  </div>
</template>

<script>
import "./profilPage.css";
import SideBarProfil from "@/components/sideBarProfil/SideBarProfil";
import PostCard from "@/components/postCard/PostCard";
import ButtonComponent from "@/components/button/Button";

export default {
  data() {
    return {};
  },
  components: {
    "side-bar": SideBarProfil,
    "post-card": PostCard,
    "button-component": ButtonComponent,
  },
  methods: {},
};
</script>
