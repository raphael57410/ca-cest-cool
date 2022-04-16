<template>
  <div class="postForm-container">
    <form
      v-on:submit.prevent="
        () => {
          addPost({ titre, description });
          titre = '';
          description = '';
          $router.push('./profil');
        }
      "
      class="postForm"
    >
      <input-component
        v-model="titre"
        type="text"
        placeholder="Titre du post"
      ></input-component>
      <input-component
        v-model="description"
        type="text"
        placeholder="description du post"
      ></input-component>
      <button-component
        class="postForm-button"
        name="Publier"
        type="submit"
      ></button-component>
    </form>
  </div>
</template>

<script>
import "./postFormPage.css";
import InputComponent from "@/components/input/Input";
import ButtonComponent from "@/components/button/Button";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      titre: "",
      description: "",
    };
  },
  components: {
    "input-component": InputComponent,
    "button-component": ButtonComponent,
  },
  methods: {
    ...mapActions(["addPost"]),
  },
};
</script>
