<template>
  <div class="login-container">
    <div class="side-block"></div>

    <div class="field-block">
      <form>
        <h3 class="header">Let’s Get Started</h3>

        <div class="form-group">
          <label>Name</label>
          <input
            type="email"
            class="form-control"
            v-model="email"
            placeholder="Enter your email address"
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="email"
            placeholder="Enter your email address"
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            placeholder="Enter your password"
          />
        </div>

        <div v-if="errors" class="error-messages">
          <span> {{ errors }}</span>
        </div>

        <input
          type="button"
          @click="login"
          value="Create an account"
          class="primary-button"
        />

        <div class="signup-section">
          <h3 class="signup-label">
            Already have an account? <span class="forgot-label"
              >Sign In instead</span
            >
          </h3>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { LOGIN } from "@/store/actions.type";
import { mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState({
      //   errors: (state) => state.user.errors,
    }),
  },
  methods: {
    // async login() {
    //   try {
    //     const credentials = {
    //       email: this.email,
    //       password: this.password,
    //     };
    //     this.$store.dispatch(LOGIN, credentials);
    //   } catch (error) {
    //     console.log(error.response.data.msg);
    //   }
    // },
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

.field-block {
  flex: 1;
  background: #0c2867;
  padding: 0 50px;
}

form {
  padding: 25px 50px;
}

.header {
  font-size: 48px;
  color: #ffffff;
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
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat";
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
}
</style>
