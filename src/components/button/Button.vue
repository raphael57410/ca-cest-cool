<template>
  <button @click="clickFunc" :type="type" class="button">{{ name }}</button>
</template>

<script>
import "./button.css";
export default {
  name: "ButtonComponent",
  props: {
    name: String,
    type: String,
  },
  methods: {
    clickFunc() {
      this.$emit("onClick");
    },
  },
};
</script>
