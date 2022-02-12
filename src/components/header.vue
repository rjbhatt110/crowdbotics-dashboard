<template>
  <div class="header">
    <h1 @click="gotoHome" class="logo">Crowdbotics</h1>
    <div class="menu">
      <h3 @click="gotoCreateApp">Create App</h3>
      <!-- <h3 @click="gotoPlan">Plans</h3> -->
      <h3 @click="logout">Logout</h3>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Header",
  data: () => ({}),
  mounted() {},
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    gotoCreateApp() {
      router.push("/createApp");
    },
    gotoHome() {
      router.push("/dashboard");
    },
    gotoPlan() {
      router.push("/plan");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
}

.header h1 {
  font-size: 24px;
  color: #fff;
  flex: 3;
}

.logo {
  cursor: pointer;
}

.menu {
  display: flex;
  justify-content: space-evenly;
  flex: 1;
}

.menu h3 {
  font-size: 18px;
  color: #62f9fc;
  font-weight: 700;
  cursor: pointer;
}
</style>
