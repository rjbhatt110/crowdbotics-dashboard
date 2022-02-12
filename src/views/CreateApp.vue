<template>
  <div class="create-container">
    <Header></Header>
    <div class="content-block">
      <div class="page-header">
        <h1>Create App</h1>
        <p>A paragraph for the main content.</p>
      </div>

      <div class="app-field">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="name"
            placeholder="Enter App Name"
          />
        </div>
        <div class="form-group">
          <label>Type</label>
          <select v-model="type" class="form-control">
            <option disabled value="">Please Select Type</option>
            <option>Web</option>
            <option>Mobile</option>
          </select>
        </div>
        <div class="form-group">
          <label>Framework</label>
          <select v-model="framework" class="form-control">
            <option disabled value="">Please Select Framework</option>
            <option>Django</option>
            <option>React Native</option>
          </select>
        </div>

        <input
          v-if="!appDetails"
          type="button"
          @click="createApp"
          value="Create an app"
          class="primary-button"
        />

        <input
          v-else
          type="button"
          @click="editApp"
          value="Save"
          class="primary-button"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";

export default {
  name: "CreateApp",
  props: ["appDetails"],
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      type: "",
      framework: "",
    };
  },
  computed: {},
  mounted() {
    if (this.appDetails) {
      this.name = this.appDetails.name;
      this.type = this.appDetails.type;
      this.framework = this.appDetails.framework;
    }
  },
  methods: {
    createApp() {
      this.$store
        .dispatch("createApp", {
          name: this.name,
          type: this.type,
          framework: this.framework,
        })
        .then(() => {
          this.name = "";
          this.type = "";
          this.framework = "";
        });
    },

    editApp() {
      this.$store.dispatch("editApp", {
        id: this.appDetails.id,
        name: this.name,
        type: this.type,
        framework: this.framework,
      });
    },
  },
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
  color: #ffffff;
  font-size: 16px;
  font-family: "Montserrat";
}

.form-group select {
  font-size: 16px;
  font-family: "Montserrat";
  appearance: none;
}

.form-group select:focus {
  background: rgb(255 255 255 / 10%);
  border: 3px solid #ffffff;
  border-radius: 10px;
  padding: 20px 15px;
  outline: none;
}

.form-group option {
  color: #0c2867;
  font-size: 16px;
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
  margin: 10px 0;
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
</style>
