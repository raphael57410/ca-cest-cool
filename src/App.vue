<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./app.css";
import { mapActions } from "vuex";

export default {
  name: "App",
  created() {
    this.initCurrentUser();
    console.log("App", this.$store.getters.currentUser);
  },
  methods: {
    ...mapActions(["initCurrentUser"]),
  },
};
</script>
