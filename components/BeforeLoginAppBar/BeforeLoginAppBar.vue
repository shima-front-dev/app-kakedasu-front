<template>
  <div class="BeforeLoginAppBar">
    <div class="BeforeLoginAppBar_Container">
      <div class="BeforeLoginAppBar_Left">KAKEDASU</div>
      <div class="BeforeLoginAppBar_Right">
        <app-button color="blue-lighten-1"
          ><span class="BeforeLoginAppBar_RightButtonText"
            >はじめる</span
          ></app-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "~/components/basics/AppButton";
export default {
  components: { AppButton },
  name: "BeforeLoginAppBar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.BeforeLoginAppBar {
  width: 100%;
  height: 64px;
  top: 0;
  z-index: 99;
  position: fixed;
  box-shadow: 0px 3px 25px rgb(77 77 99 / 10%);
  margin-bottom: 30px;
  background: white;
  display: flex;
  justify-content: center;
}
.BeforeLoginAppBar_Container {
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 900px;
  justify-content: space-between;
  width: 100%;
  padding: 0 30px;
}
.BeforeLoginAppBar_Left {
  width: 140px;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
}
.BeforeLoginAppBar_RightButtonText {
  font-weight: bold;
}
</style>
