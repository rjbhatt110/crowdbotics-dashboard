<template>
  <div class="dashboard-container">
    <div class="header">
      <h1>Crowdbotics</h1>
      <div class="menu">
        <h3>Plans</h3>
        <h3 @click="logout">Logout</h3>
      </div>
    </div>
    <div class="content-block">
      <div class="page-header">
        <h1>App List</h1>
        <p>A paragraph for the main content.</p>
      </div>

      <div class="app-list">
        <div v-for="(item, index) in getAppList" :key="index" class="app-card">
          <div class="app-framework">
            <img
              v-if="item.framework === 'Django'"
              src="@/assets/django.png"
              alt=""
            />
            <img
              v-if="item.framework === 'React Native'"
              src="@/assets/react.png"
              alt=""
            />
          </div>
          <div class="app-details">
            <h1 class="app-title">{{ item.name }}</h1>
            <h4 class="app-type">{{ item.type }}</h4>
          </div>
          <div class="app-subscription">
            <h1 class="app-title">{{ item.subscription }}</h1>
            <h4 class="app-type">Plan</h4>
          </div>
          <div class="app-action">
            <input
              type="button"
              @click="editApp(item)"
              value="Edit"
              class="primary-button"
            />
            <input
              type="button"
              @click="deleteApp(item.id)"
              value="Delete"
              class="primary-button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import router from "../router";

export default {
  name: "Dashboard",
  components: {
    // layout,
  },
  data: () => ({}),
  computed: {
    ...mapGetters(["getAppList"]),
  },
  mounted() {
    this.$store.dispatch("fetchAllApp");
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    deleteApp(appID) {
      this.$store.dispatch("deleteApp", appID).then(() => {
        this.$store.dispatch("fetchAllApp");
      });
    },
    editApp(appDetails) {
      router.push({
        name: "CreateApp",
        params: { appDetails: appDetails },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard-container {
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
  flex: 5;
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

.app-list {
  width: 70%;
}
.app-card {
  background: #ffffff;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}
.app-details {
  flex: 3;
}
.app-title {
  font-size: 20px;
  font-weight: 700;
  color: #0c2867;
  margin: 0 0 8px 0;
}
.app-type {
  font-size: 16px;
  font-weight: 500;
  color: #2e53e6;
}
.app-framework {
  flex: 1;
}
.app-framework img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
.app-subscription {
  margin: 0 10px;
  flex: 2;
}

.app-action {
  display: flex;
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
  cursor: pointer;
  margin: 0 10px;
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
  margin: 0 10px;
  cursor: pointer;
}
</style>
