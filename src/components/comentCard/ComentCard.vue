<template>
  <div
    class="comentCard-container"
    :class="{
      'comentCard-container user': coment.user[0][0]._id === currentUserId,
    }"
  >
    <div class="comentCard-img-container">
      <img
        class="comentCard-img"
        :src="'images/' + coment.user[0][0].profilPicture"
        alt="cacestcool-logo"
      />
      <span>{{
        coment.comentCreated.split("T")[0].split("-").reverse().join("-")
      }}</span>
      <span>{{
        coment.comentCreated.split("T")[1].split(":")[0] +
        ":" +
        coment.comentCreated.split("T")[1].split(":")[1]
      }}</span>
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
  data() {
    return {
      currentUserId: "",
    };
  },
  props: {
    coment: Object,
  },
  methods: {
    // ...mapActions(["deletePost"]),
  },
  created() {
    if (this.$store.getters.currentUser.length > 0) {
      this.currentUserId = this.$store.getters.currentUser[0]._id;
    } else {
      this.currentUserId = this.$store.getters.currentUser._id;
    }
  },
  name: "ComentCard",
};
</script>
