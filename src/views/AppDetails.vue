<template>
  <div class="app-container">
    <Header></Header>
    <div class="content-block">
      <div class="page-header">
        <div class="app-framework">
          <img
            v-if="getApp.framework === 'Django'"
            src="@/assets/django.png"
            alt=""
          />
          <img
            v-if="getApp.framework === 'React Native'"
            src="@/assets/react.png"
            alt=""
          />
        </div>
        <h1>{{ getApp.name }}</h1>
        <p>{{ getApp.description || "No description" }}</p>
        <div class="app-type">
          <h1>
            {{ getApp.type }}
          </h1>
          <h4>Type</h4>
        </div>
        <div class="app-subscription">
          <h1>
            {{ getApp.subscription || "No Subscription Plan" }}
          </h1>
          <h4>Subscription</h4>
        </div>
        <input
          type="button"
          @click="UpdatePlan(getApp)"
          value="Upgrade Plan"
          class="primary-button"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import router from "../router";
import { mapGetters } from "vuex";

export default {
  name: "AppDetails",
  components: {
    Header,
  },
  data: () => ({}),
  computed: { ...mapGetters(["getApp"]) },
  created() {
    this.$store.dispatch("fetchApp", this.$route.params.id);
  },
  methods: {
    UpdatePlan(appDetails) {
      router.push({
        name: "Plan",
        params: { id: appDetails.id },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-container {
  background: #0c2867;
  height: 100%;
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

.app-framework img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

.app-type h1 {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
}

.app-type h4 {
  font-size: 18px;
  font-weight: 400;
  color: #62f9fc;
}

.app-subscription h1 {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
}

.app-subscription h4 {
  font-size: 18px;
  font-weight: 400;
  color: #62f9fc;
}

.primary-button {
  background: #2e53e6;
  border-radius: 10px;
  border: 0;
  width: 20%;
  padding: 12px 25px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat";
  margin: 15px 0;
}
</style>
