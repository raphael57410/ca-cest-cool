<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    :required="required ? true : false"
    @input="updateSelf($event.target.value)"
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
    required: Boolean,
  },
  methods: {
    updateSelf(value) {
      this.$emit("input", value);
    },
  },
};
</script>
