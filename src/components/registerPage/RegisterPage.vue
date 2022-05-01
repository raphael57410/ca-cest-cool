<template>
  <div class="register-container">
    <form
      class="register-form"
      action=""
      enctype="multipart/form-data"
      method="post"
      name="form"
      v-on:submit.prevent="
        () => {
          addUser($event);
        }
      "
    >
      <input-component
        type="text"
        placeholder="Nom"
        v-model="lastname"
        class="register-input"
        name="lastname"
      >
      </input-component
      ><input-component
        type="text"
        placeholder="Prénom"
        v-model="firstname"
        class="register-input"
        name="firstname"
      >
      </input-component
      ><input-component
        type="text"
        placeholder="e-mail"
        v-model="email"
        class="register-input"
        name="email"
      >
      </input-component
      ><input-component
        type="text"
        placeholder="password"
        v-model="password"
        class="register-input"
        name="password"
      >
      </input-component
      ><input-component
        type="text"
        placeholder="biographie"
        v-model="bio"
        class="register-input"
        name="bio"
      >
      </input-component>
      <input-component
        name="images"
        type="file"
        v-model="profilPicture"
        class="register-input"
      >
      </input-component>
      <button-component
        name="Envoyer"
        type="submit"
        class="register-button"
      ></button-component>
    </form>
  </div>
</template>

<script>
import "./registerPage.css";
import ButtonComponent from "@/components/button/Button";
import InputComponent from "@/components/input/Input";

import { mapActions } from "vuex";

export default {
  name: "RegisterComponent",
  components: {
    "input-component": InputComponent,
    "button-component": ButtonComponent,
  },
  data() {
    return {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      profilPicture: "",
      bio: "",
    };
  },
  props: {},
  methods: {
    ...mapActions(["addUser"]),
  },
};
</script>
