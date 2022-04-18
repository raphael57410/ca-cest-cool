<template>
  <div class="postForm-container">
    <loader-component v-if="$store.state.loader"></loader-component>
    <form
      v-on:submit.prevent="
        () => {
          addPost({ titre, description });
          titre = '';
          description = '';
        }
      "
      class="postForm"
    >
      <input-component
        v-model="titre"
        type="text"
        placeholder="Titre du post"
      ></input-component>
      <textarea
        class="input"
        v-model="description"
        type="text"
        placeholder="description du post"
      ></textarea>
      <button-component
        class="postForm-button"
        name="Publier"
        type="submit"
      ></button-component>
    </form>
    <a href="/profil">Retour</a>
  </div>
</template>

<script>
import "./postFormPage.css";
import InputComponent from "@/components/input/Input";
import ButtonComponent from "@/components/button/Button";
import LoaderComponent from "@/components/loader/Loader";

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
    "loader-component": LoaderComponent,
  },
  methods: {
    ...mapActions(["addPost"]),
  },
};
</script>
