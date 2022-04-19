<template>
  <div
    class="comentCard-container"
    :class="{
      'comentCard-container user':
        coment.user[0][0]._id === $store.state.currentUser._id,
    }"
  >
    <div class="comentCard-img-container">
      <img
        class="comentCard-img"
        src="../../assets/logo.png"
        alt="cacestcool-logo"
      />
    </div>
    <div class="comentCard-section-container">
      <h2 class="comentCard-section-author">
        {{ coment.user[0][0].firstname + " " + coment.user[0][0].lastname }}
      </h2>
      <p class="comentCard-section-text">
        {{ coment.coment }}
      </p>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import "./comentCard.css";

export default {
  props: {
    coment: Object,
  },
  methods: {
    // ...mapActions(["deletePost"]),
  },
  name: "ComentCard",
};
</script>
