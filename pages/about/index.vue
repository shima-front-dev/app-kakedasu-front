<template>
  <div>
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
      const url = "http://localhost:5000/api/v1/hello";
      const { data: response, error } = await useFetch(url);
      console.log(process.env);
      this.msgs.push(response.value);
    },
  },
  created() {
    console.log(this.$config.public.test);
  },
};
</script>
