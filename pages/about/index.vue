<template>
  <div>
    <AppButton color="indigo" @on-click="apiCall">ボタン</AppButton>
  </div>
</template>

<script>
import AppButton from "~/components/basics/AppButton";
export default {
  name: "KakedasuAbout",
  components: {
    AppButton,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    apiCall() {
      console.log("hogehoge");
    },
  },
};
</script>

<style lang="scss" scoped></style>
