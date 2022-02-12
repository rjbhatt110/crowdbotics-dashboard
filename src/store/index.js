import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import app from "./app";
import plan from "./plan";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        app,
        plan
    }
});