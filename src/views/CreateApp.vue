<template>
  <div class="create-container">
    <div class="header">
      <h1>Crowdbotics</h1>
      <h3>Pricing? <span>Check our plans</span></h3>
    </div>
    <div class="content-block">
      <div class="page-header">
        <h1>Create App</h1>
        <p>A paragraph for the main content.</p>
      </div>

      <div class="app-field">
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
          <label>Email</label>
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
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import layout from "../components/Layout.vue";
export default {
  name: "Dashboard",
  components: {
    // layout,
  },
  data: () => ({}),
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.create-container {
  background: #0c2867;
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
}

.header h1 {
  font-size: 24px;
  color: #fff;
}
.header h3 {
  font-size: 18px;
  color: #fff;
  font-weight: 400;
}
.header h3 span {
  font-size: 18px;
  color: #62f9fc;
  font-weight: 700;
}
.content-block {
  padding: 10px 80px;
}
.page-header {
  color: #ffffff;
  margin: 25px 0px;
}
.page-header h1 {
  color: #ffffff;
  font-size: 36px;
  font-weight: 700;
  margin: 10px 0;
}
.page-header p {
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
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
  padding: 12px 25px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat";
  margin: 0 10px;
}
</style>
