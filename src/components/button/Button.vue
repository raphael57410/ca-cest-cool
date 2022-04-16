<template>
  <button @click="clickFunc" class="button">{{ name }}</button>
</template>

<script>
import "./button.css";
export default {
  name: "ButtonComponent",
  props: {
    name: String,
  },
  methods: {
    clickFunc() {
      this.$emit("onClick");
    },
  },
};
</script>
