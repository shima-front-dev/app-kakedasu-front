<template>
  <div>
    <v-btn :color="color" @click="onClick"><slot></slot></v-btn>
  </div>
</template>

<script>
export default {
  name: "KakedasuAppButton",
  props: {
    color: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    onClick() {
      this.$emit("on-click");
    },
  },
};
</script>

<style lang="scss" scoped></style>
