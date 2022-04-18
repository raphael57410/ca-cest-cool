<template>
  <div class="detailPostCard-container">
    <div class="detailPostCard-header">
      <div class="detailPostCard-date">{{ post.postCreated }}</div>
      <button-component
        name="Commenter"
        class="detailPostCard-coment-button"
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
  </div>
</template>

<script>
import ButtonComponent from "@/components/button/Button";

import "./detailPostCard.css";

export default {
  name: "DetailPostCard",
  props: {
    post: Object,
  },
  components: {
    "button-component": ButtonComponent,
  },
};
</script>
