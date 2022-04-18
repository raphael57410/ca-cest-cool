<template>
  <div class="detailPostCard-container">
    <div class="detailPostCard-header">
      <div class="detailPostCard-date">{{ post.postCreated }}</div>
      <button-component
        name="Commenter"
        class="detailPostCard-coment-button"
        @onClick="focusInput"
      ></button-component>
    </div>
    <div class="detailPostCard-title-container">
      <h1>{{ post.title }}</h1>
      <span
        >par {{ post.user[0].firstname + " " + post.user[0].lastname }}</span
      >
      <span>{{ post.like }} likes</span>
    </div>
    <div class="detailPostCard-img-container">
      <img
        class="detailPostCard-img"
        src="https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="image"
      />
      <p class="detailPostCard-text-container">{{ post.description }}</p>
    </div>
    <div class="detailPostCard-coment-container">
      <coment-card
        v-for="coment in post.coment"
        :coment="coment[0]"
        :key="coment._id"
      ></coment-card>
    </div>
    <form
      v-on:submit.prevent="
        () => {
          const postId = post._id;
          addComent({ coment, postId });
          coment = '';
        }
      "
    >
      <input-component
        ref="email"
        v-model="coment"
        type="text"
        placeholder="nouveau commentaire"
      ></input-component>

      <button-component
        name="Envoyer"
        type="submit"
        class="detailPostCard-coment-sendButton"
      ></button-component>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import ButtonComponent from "@/components/button/Button";
import InputComponent from "@/components/input/Input";
import ComentCard from "@/components/comentCard/ComentCard";

import "./detailPostCard.css";

export default {
  data() {
    return {
      coment: "",
    };
  },
  name: "DetailPostCard",
  props: {
    post: Object,
  },
  components: {
    "button-component": ButtonComponent,
    "coment-card": ComentCard,
    "input-component": InputComponent,
  },
  methods: {
    ...mapActions(["addComent"]),

    focusInput() {
      this.$refs.email.$el.focus();
    },
  },
};
</script>
