<template>
  <div>
    <BeforeLoginFormCard>
      <template #form-card-content>
        <form @submit.prevent="submit">
          <v-text-field
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Name"
          ></v-text-field>

          <v-text-field
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            label="Phone Number"
          ></v-text-field>

          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
          ></v-text-field>

          <v-select
            v-model="select.value.value"
            :items="items"
            :error-messages="select.errorMessage.value"
            label="Select"
          ></v-select>

          <v-checkbox
            v-model="checkbox.value.value"
            :error-messages="checkbox.errorMessage.value"
            value="1"
            label="Option"
            type="checkbox"
          ></v-checkbox>

          <v-btn class="me-4" type="submit" color="blue-lighten-1" disabled>
            submit
          </v-btn>

          <v-btn @click="handleReset"> clear </v-btn>
        </form>
      </template>
    </BeforeLoginFormCard>
  </div>
</template>

<script>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import BeforeLoginFormCard from "~~/components/BeforeLoginFormCard";

export default {
  components: {
    BeforeLoginFormCard,
  },
  data() {
    return {
      isValid: false,
    };
  },
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 2) return true;

          return "Name needs to be at least 2 characters.";
        },
        phone(value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

          return "Phone number needs to be at least 9 digits.";
        },
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

          return "Must be a valid e-mail.";
        },
        select(value) {
          if (value) return true;

          return "Select an item.";
        },
        checkbox(value) {
          if (value === "1") return true;

          return "Must be checked.";
        },
      },
    });
    const name = useField("name");
    const phone = useField("phone");
    const email = useField("email");
    const select = useField("select");
    const checkbox = useField("checkbox");

    const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

    const submit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });

    return { name, phone, email, select, checkbox, items, submit, handleReset };
  },
};
</script>

<!-- <template>
  <div>
    <BeforeLoginFormCard>
      <template #form-card-content>
        <v-form v-model="isValid" ref="form" @submit="signup">
          <UserFormName :name.sync="params.user.name" />
          <UserFormEmail :email.sync="params.user.email" />
          <UserFormPassword :password.sync="params.user.password" />
          <v-btn
            block
            color="myblue"
            class="white--text"
            :disabled="!isValid || loading"
            :loading="loading"
            type="submit"
          >
            登録する
          </v-btn>
        </v-form>
      </template>
    </BeforeLoginFormCard>
  </div>
</template>

<script>
import UserFormName from "~/components/user/UserFormName";
import UserFormEmail from "~/components/user/UserFormEmail";
import UserFormPassword from "~/components/user/UserFormPassword";
import BeforeLoginFormCard from "~~/components/BeforeLoginFormCard";
export default {
  name: "KakedasuSignup",

  components: {
    UserFormName,
    UserFormEmail,
    UserFormPassword,
    BeforeLoginFormCard,
  },
  data() {
    return {
      isValid: false,
      params: { user: { name: "", email: "", password: "" } },
      loading: false,
    };
  },
  methods: {
    signup() {
      this.loading = true;
      setTimeout(() => {
        this.formReset();
        this.loading = false;
      }, 1500);
    },
    formReset() {
      this.$refs.form.reset();
      this.params = { user: { name: "", email: "", password: "" } };
    },
  },
};
</script> -->
