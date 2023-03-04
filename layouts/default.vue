<template>
  <div>
    <BeforeLoginAppBar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import BeforeLoginAppBar from "~/components/BeforeLoginAppBar/BeforeLoginAppBar";
export default {
  components: {
    BeforeLoginAppBar,
  },
};
</script>

<style>
main {
  padding-top: 64px;
}
</style>
