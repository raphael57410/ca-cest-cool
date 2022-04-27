<template>
  <div class="detailUser-container">
    <form
      action=""
      class="detailUser-form"
      v-on:submit.prevent="
        () => {
          updateUser(user);
        }
      "
    >
      <input-component
        type="text"
        v-model="user.email"
        class="detailUser-input"
        name="email"
      >
      </input-component>
      <input-component
        type="text"
        v-model="user.firstname"
        class="detailUser-input"
      >
      </input-component>
      <input-component
        type="text"
        v-model="user.lastname"
        class="detailUser-input"
      >
      </input-component>
      <input-component type="text" v-model="user.bio" class="detailUser-input">
      </input-component
      ><button-component
        name="Envoyer"
        type="submit"
        class="sideBar-button"
      ></button-component>
    </form>
  </div>
</template>

<script>
import "./detailUserPage.css";
import ButtonComponent from "@/components/button/Button";
import InputComponent from "@/components/input/Input";
import { mapActions } from "vuex";

export default {
  name: "DetailUserComponent",
  data() {
    return {
      user: { ...this.$store.getters.currentUser },
    };
  },
  methods: {
    ...mapActions(["updateUser"]),
  },
  components: {
    "input-component": InputComponent,
    "button-component": ButtonComponent,
  },
  created() {
    console.log("detail User:", this.$store.getters.currentUser);
  },
};
</script>
