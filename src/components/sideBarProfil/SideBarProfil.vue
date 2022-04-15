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
        <a class="link" href="#">Mon Mur</a>
        <div class="sideBar-link-number">2</div>
      </div>
      <div class="sideBar-link">
        <a class="link" href="#">Mes Messages</a>
        <div class="sideBar-link-number">3</div>
      </div>
      <div class="sideBar-link">
        <a class="link" href="#">Mon compte</a>
      </div>
    </div>
  </div>
</template>

<script>
import "./sideBarProfil.css";

export default {
  name: "SideBar",
};
</script>
