<template>
  <div class="plan-container">
    <Header></Header>
    <div class="content-block">
      <div class="page-header">
        <h1>Plans</h1>
        <p>A paragraph for the main content.</p>
      </div>

      <div>
        <div class="app-list">
          <div
            v-for="(item, index) in getPlanList"
            :key="index"
            class="app-card"
          >
            <div class="app-details">
              <h1 class="app-title">{{ item.name }}</h1>
              <h4 class="app-type">{{ item.description }}</h4>
            </div>
            <div class="app-subscription">
              <h1 class="app-title">${{ item.price }}</h1>
            </div>
            <div class="app-action">
              <input
                v-if="currentPlan === item.id"
                type="button"
                value="Current"
                class="primary-button-disable"
              />
              <input
                v-else
                type="button"
                @click="activePlan(item.id)"
                value="Active"
                class="primary-button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "../components/header.vue";
import PlanService from "../services/PlanService";

export default {
  name: "Plan",
  components: {
    Header,
  },
  data() {
    return {
      currentPlan: 0,
    };
  },
  computed: {
    ...mapGetters(["getPlanList", "getApp"]),
  },
  created() {
    this.$store.dispatch("fetchApp", this.$route.params.id);
  },
  async mounted() {
    setTimeout(() => {
      PlanService.getSubscriptions(this.getApp.subscription).then((res) => {
        this.currentPlan = res.plan;
        this.$store.dispatch("fetchAllPlan");
      });
    }, 800);
  },
  methods: {
    activePlan(planID) {
      this.$store.dispatch("editPlan", {
        plan: planID,
        app: this.getApp.id,
        subscriptionID: this.getApp.subscription,
        active: true,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.plan-container {
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
  margin: 0 10px;
}
.primary-button-disable {
  background: #2e53e670;
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
