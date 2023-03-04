<template>
  <div class="home">
    <AppButton @on-click="getMsg" color="indigo">railsからapi取得</AppButton>
    <div v-for="(msg, i) in msgs" :key="i">
      {{ msg }}
    </div>
  </div>
</template>

<script>
import AppButton from "~/components/basics/AppButton";
export default {
  components: {
    AppButton,
  },
  data() {
    return {
      msgs: [],
    };
  },
  methods: {
    async getMsg() {
      const url = `${this.$config.public.apiUrl}/hello`;
      const res = await useFetch(url);
      const { data: response, error } = await useFetch(url);
      this.msgs.push(response.value);
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.home {
  height: 2000px;
}
</style>
