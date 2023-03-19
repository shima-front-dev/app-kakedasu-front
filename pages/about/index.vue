<template>
  <div class="home">
    <AppButton @on-click="getMsg" color="indigo">railsからapi取得</AppButton>
    <div v-for="(msg, i) in msgs" :key="i">
      {{ msg }}
    </div>
    <AppButton @on-click="getUser" color="pink">railsからapi取得</AppButton>
    <div>
      {{ user }}
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
      user: null,
    };
  },
  methods: {
    async getMsg() {
      const url = `${this.$config.public.apiUrl}/users`;
      const res = await useFetch(url);
      const { data: response, error } = await useFetch(url);
      this.msgs = response.value;
    },
    // async getUser() {
    //   const url = `${this.$config.public.apiUrl}/users/2`;
    //   const res = await useFetch(url);
    //   const { data: response, error } = await useFetch(url);
    //   this.user = response.value;
    // },
    async getUser() {
      const url = `${this.$config.public.apiUrl}/users/1`;
      try {
        const { data: response } = await useFetch(url);
        console.log("ユーザー情報を取得しました:", response);
        this.user = response;
      } catch (error) {
        console.error("ユーザー情報の取得に失敗しました:", error);
      }
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
