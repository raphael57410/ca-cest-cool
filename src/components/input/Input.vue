<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    :v-model="value"
  />
</template>

<script>
import "./input.css";

export default {
  name: "InputComponent",
  props: {
    type: String,
    placeholder: String,
    value: String,
  },
};
</script>
