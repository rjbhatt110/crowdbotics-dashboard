<template>
  <div class="login-container">
    <div class="side-block">
      <div class="header">
        <h1>Crowdbotics</h1>
      </div>
      <div class="illustration">
        <img class="intro-image" src="@/assets/app-illustration.png" alt="" />
      </div>
    </div>

    <div class="field-block">
      <form>
        <h3 class="login-header">Forgot Password! Don't worry</h3>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="email"
            placeholder="Enter your email address"
          />
        </div>

        <div v-if="errors" class="error-messages">
          <span> {{ errors }}</span>
        </div>

        <input
          type="button"
          @click="sendEmail"
          value="Send"
          class="primary-button"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import router from "../router";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
    };
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
  },
  methods: {
    async sendEmail() {
      try {
        const credentials = {
          email: this.email,
        };
        this.$store.dispatch("resetPassword", credentials);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-messages {
  margin: 15px 0;
  color: #ff0000;
}

.login-container {
  display: flex;
  width: 100%;
}

.side-block {
  flex: 1.5;
  width: 100%;
  height: 100vh;
  margin: auto;
  background-color: rgba(59, 98, 255, 0.05);
  border-radius: 15px;
}

.header {
  margin: 20px 40px;
}

.header h1 {
  font-size: 28px;
  color: #0c2867;
}

.illustration {
  display: flex;
  justify-content: center;
}

.intro-image {
  width: 75%;
}

.field-block {
  flex: 1;
  background: #0c2867;
  padding: 0 50px;
}

form {
  padding: 25px 50px;
}

.login-header {
  font-size: 48px;
  color: #ffffff;
  margin: 50px 0;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
.form-group label {
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
}

.form-group .form-control {
  background: transparent;
  border: 3px solid #ffffff;
  border-radius: 10px;
  padding: 20px 15px;
  color: #ffffff;
  font-size: 18px;
}

.form-group input:focus {
  background: rgb(255 255 255 / 10%);
  border: 3px solid #ffffff;
  border-radius: 10px;
  padding: 20px 15px;
  outline: none;
}

.form-group .form-control::placeholder {
  color: #ffffffbb;
  font-size: 16px;
  font-family: "Montserrat";
}

.primary-button {
  background: #2e53e6;
  border-radius: 10px;
  border: 0;
  width: 100%;
  padding: 20px;
  margin: 15px 0px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat";
  cursor: pointer;
}

.primary-button:active {
  background: #2e53e6;
  border-radius: 10px;
  border: 0;
  width: 100%;
  padding: 20px;
  margin: 15px 0px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat";
  cursor: pointer;
  transform: scale(0.98);
}

.signup-label {
  font-weight: 400;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
}
.forgot-label {
  font-weight: 700;
  color: #62f9fc;
  font-size: 18px;
  text-align: right;
  margin: 15px 0;
  cursor: pointer;
}
</style>
