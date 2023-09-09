<!-- <template>
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

          <v-btn
            class="me-4"
            type="submit"
            color="blue-lighten-1"
            :disabled="isValid"
          >
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
</script> -->

<template>
  <div>
    {{ isValid }}
    <BeforeLoginFormCard>
      <template #form-card-content>
        <v-form v-model="isValid" ref="form" @submit.prevent="signup">
          <UserFormName
            :name.sync="params.user.name"
            @update-name="updateName"
          />
          <UserFormEmail
            :email.sync="params.user.email"
            @update-email="updateEmail"
          />
          <UserFormPassword
            :password.sync="params.user.password"
            @update-password="updatePassword"
          />
          <!-- <div class="Signup_ErrorMessage">{{ errorMessage }}</div> -->
          <v-btn
            block
            :color="isValid ? 'blue' : 'gray'"
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
    <v-btn @click="signup"> テスト </v-btn>
    <v-snackbar v-model="snackbar" vertical color="red">
      <!-- <div class="text-subtitle-1 pb-2">This is a snackbar message</div> -->
      <p>{{ errorMessage }}</p>
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
      errorMessage: "",
      snackbar: false,
    };
  },
  methods: {
    // this.loading = true;
    // setTimeout(() => {
    //   this.formReset();
    //   this.loading = false;
    // }, 1500);
    async signup() {
      try {
        const { data: responseData, error } = await useFetch(
          "http://localhost:3000/api/v1/auth",
          {
            method: "post",
            body: {
              name: this.params.user.name,
              email: this.params.user.email,
              password: this.params.user.password,
            },
            // body: {
            //   name: this.params.name,
            //   email: "user2@example.com",
            //   password: "password",
            // },
          }
        );
        // エラーチェック: エラーレスポンスがある場合
        if (error.value) {
          this.errorMessage = error.value.data[0];
          console.log(error.value.data[0]);
          this.snackbar = true;
        } else {
          // エラーがない場合の処理
          console.log(responseData.value);
          console.log(responseData);
          this.$router.push("/");
        }
      } catch (exception) {
        // 非同期操作中に例外がスローされた場合の処理
        console.error("エラーが発生しました:", exception);
      }
    },
    formReset() {
      this.$refs.form.reset();
      this.params = { user: { name: "", email: "", password: "" } };
    },
    updateName(name) {
      this.params.user.name = name;
    },
    updateEmail(email) {
      this.params.user.email = email;
    },
    updatePassword(password) {
      this.params.user.password = password;
    },
  },
};
</script>

<style lang="scss" scoped>
.Signup_ErrorMessage {
  color: red;
}
</style>
