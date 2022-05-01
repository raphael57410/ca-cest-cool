<template>
  <div class="detailUser-container">
    <form
      name="form"
      class="detailUser-form"
      @submit.prevent="
        () => {
          updateUser($event);
        }
      "
    >
      <img
        class="detailUser-img"
        :src="
          user.profilPicture
            ? 'images/' + user.profilPicture
            : 'images/avatar.png'
        "
        alt="avatar"
      />
      <input-component
        name="images"
        type="file"
        v-model="profilPicture"
        class="register-input"
      >
      </input-component>

      <input-component
        type="text"
        name="email"
        v-model="user.email"
        class="detailUser-input"
        required
      >
      </input-component>
      <input-component
        type="text"
        name="firstname"
        v-model="user.firstname"
        class="detailUser-input"
        required
      >
      </input-component>
      <input-component
        type="text"
        name="lastname"
        v-model="user.lastname"
        class="detailUser-input"
        required
      >
      </input-component>
      <input-component
        type="text"
        name="bio"
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
      profilPicture: "",
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
    //TODO: voir pour améliorer
    if (this.$store.getters.currentUser.length > 0) {
      this.user = this.$store.getters.currentUser[0];
    } else {
      this.user = this.$store.getters.currentUser;
    }
    console.log("detail User:", this.$store.getters.currentUser);
  },
};
</script>
