<template>
  <v-text-field
    v-model="setEmail"
    label="メールアドレスを入力"
    :placeholder="form.placeholder"
    outlined
    :rules="rules"
  />
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: "",
    },
    noValidation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rules: [(v) => !!v || "", (v) => /.+@.+\..+/.test(v) || ""],
    };
  },
  computed: {
    setEmail: {
      get() {
        return this.email;
      },
      set(newVal) {
        return this.$emit("update:email", newVal);
      },
    },
    form() {
      const placeholder = this.noValidation ? undefined : "your@email.com";
      return { placeholder };
    },
  },
};
</script>
