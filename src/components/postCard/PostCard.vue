<template>
  <div class="postCard-container" @click="clickEvent">
    <div class="postCard-img-container">
      <img
        class="postCard-img"
        :src="'images/' + post.user[0].profilPicture"
        alt="cacestcool-logo"
      />
    </div>
    <div class="postCard-section-container">
      <h2 class="postCard-section-title">{{ post.title }}</h2>
      <p class="postCard-section-text">{{ post.description }}</p>
      <div class="postCard-social-container">
        <span v-if="post.user[0]._id === currentId">Modifier</span>
        <div
          class="postCard-delete"
          v-if="post.user[0]._id === currentId"
          @click="deletePost(post._id)"
        >
          Supprimer
        </div>
        <div class="postCard-coment-container">
          {{ post.coment.length }}
          <font-awesome-icon icon="fa-regular fa-comment" />
        </div>
        <div class="postCard-like-container">
          {{ post.like.length }}
          <font-awesome-icon
            icon="fa-solid fa-thumbs-up"
            class="postCard-like-thumb"
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
  data() {
    return {
      currentId: "",
    };
  },
  props: {
    post: Object,
  },
  methods: {
    ...mapActions(["deletePost"]),
    clickEvent() {
      this.$emit("showPost");
    },
  },
  created() {
    if (this.$store.getters.currentUser.length > 0) {
      this.currentId = this.$store.getters.currentUser[0]._id;
    } else {
      this.currentId = this.$store.getters.currentUser._id;
    }
  },
  updated() {
    console.log("je passe dans le updated de la carte!");
    this.$emit("closePost");
  },
  name: "PostCard",
};
</script>
