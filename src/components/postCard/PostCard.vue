<template>
  <div class="postCard-container" @click="clickEvent">
    <div class="postCard-img-container">
      <img
        class="postCard-img"
        src="../../assets/logo.png"
        alt="cacestcool-logo"
      />
    </div>
    <div class="postCard-section-container">
      <h2 class="postCard-section-title">{{ post.title }}</h2>
      <p class="postCard-section-text">{{ post.description }}</p>
      <div class="postCard-social-container">
        <span v-if="post.user[0]._id === $store.state.currentUser._id"
          >Modifier</span
        >
        <span
          v-if="post.user[0]._id === $store.state.currentUser._id"
          @click="deletePost(post._id)"
          >Supprimer</span
        >
        <div class="postCard-coment-container">
          {{ post.coment.length }}
          <font-awesome-icon icon="fa-regular fa-comment" />
        </div>
        <div class="postCard-like-container">
          <font-awesome-icon
            @click="likePost(post)"
            v-if="!post.like"
            icon="fa-regular fa-thumbs-up"
          />
          <font-awesome-icon
            @click="likePost(post)"
            v-else-if="post.like"
            icon="fa-solid fa-thumbs-up"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import "./postCard.css";

export default {
  props: {
    post: Object,
  },
  methods: {
    ...mapActions(["deletePost"]),
    clickEvent() {
      this.$emit("showPost");
    },
    likePost(post) {
      post.like = !post.like;
    },
  },
  name: "PostCard",
};
</script>
