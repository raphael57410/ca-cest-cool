<template>
  <div v-if="$store.state.isConnected" class="profil-container">
    <side-bar />
    <main class="main-container">ici les posts</main>
  </div>
</template>

<script>
import "./profilPage.css";
import SideBarProfil from "@/components/sideBarProfil/SideBarProfil";

export default {
  data() {
    return {};
  },
  components: {
    "side-bar": SideBarProfil,
  },
  methods: {},
};
</script>
