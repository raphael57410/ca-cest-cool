<template>
  <input class="input" :type="type" :placeholder="placeholder" />
</template>

<script>
import "./input.css";

export default {
  name: "InputComponent",
  props: {
    type: String,
    placeholder: String,
  },
};
</script>
