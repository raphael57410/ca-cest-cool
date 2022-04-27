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
        required
      >
      </input-component>
      <input-component
        type="text"
        v-model="user.firstname"
        class="detailUser-input"
        required
      >
      </input-component>
      <input-component
        type="text"
        v-model="user.lastname"
        class="detailUser-input"
        required
      >
      </input-component>
      <input-component
        type="text"
        v-model="user.bio"
        class="detailUser-input"
        required
      >
      </input-component>
      <h3>changer de mot de passe</h3>
      <input-component
        type="password"
        placeholder="ancien mot de passe"
        v-model="oldPassword"
        class="detailUser-input"
      >
      </input-component>
      <input-component
        type="password"
        placeholder="nouveau mot de passe"
        v-model="newPassword"
        class="detailUser-input"
      >
      </input-component>
      <input-component
        type="password"
        placeholder="comfirmer votre mot de passe"
        v-model="comfirmPassword"
        class="detailUser-input"
        :class="[newPassword !== comfirmPassword ? 'detailUser-input-red' : '']"
      >
      </input-component>
      <button-component
        v-if="!oldPassword"
        name="Envoyer"
        type="submit"
        class="sideBar-button"
      ></button-component>
      <button-component
        v-else
        name="Changer de mot de passe"
        type="button"
        class="sideBar-button"
        @onClick="
          changePassWord({ user, oldPassword, newPassword, comfirmPassword })
        "
      ></button-component>
      <span>{{ this.$store.state.message }}</span>
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
      oldPassword: "",
      newPassword: "",
      comfirmPassword: "",
      user: { ...this.$store.getters.currentUser },
    };
  },
  methods: {
    ...mapActions(["updateUser", "changePassWord"]),
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
