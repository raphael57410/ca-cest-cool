<template>
  <div class="postCard-container">
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
        <div>coment</div>
        <div class="postCard-like-container">logo de like</div>
      </div>
    </div>
  </div>
</template>

<script>
import "./postCard.css";

export default {
  props: {
    post: Object,
  },
  name: "PostCard",
};
</script>
