<template>
  <div>
    <v-btn :color="color">
      <slot />
    </v-btn>
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

  methods: {},
};
</script>

<style lang="scss" scoped>
.AppButton {
  cursor: pointer;
}
</style>
