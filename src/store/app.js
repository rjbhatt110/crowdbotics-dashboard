import AppService from "../services/AppService";
import PlanService from "../services/PlanService"
// import router from "../router/index"

const state = {
    errors: null,
    appList: [],
    app: {}
};

const getters = {
    getAppList(state) {
        return state.appList;
    },
    getApp(state) {
        return state.app;
    },
};

const actions = {

    createApp({ commit }, appDetails) {
        AppService.createApp(appDetails)
            .then((data) => {
                console.log(data)
                PlanService.addPlan({
                    plan: 1,
                    app: data.id,
                    active: true
                })
                    .then((data) => {
                        console.log(data)
                    })
                    .catch(({ response }) => {
                        commit('setError', response.data.message);
                    });
            })
            .catch(({ response }) => {
                commit('setError', response);
            });
    },

    editApp({ commit }, appDetails) {
        AppService.editApp(appDetails)
            .then((data) => {
                console.log(data)
            })
            .catch(({ response }) => {
                commit('setError', response.data.message);
            });
    },

    deleteApp({ commit }, appID) {
        AppService.deleteApp(appID)
            .then((data) => {
                console.log(data)
            })
            .catch(({ response }) => {
                commit('setError', response.data.message);
            });
    },

    fetchAllApp({ commit }) {
        AppService.getAllApp()
            .then((data) => {
                commit('setAppList', data);
            })
            .catch(({ response }) => {
                commit('setError', response.data.message);
            });
    },

    fetchApp({ commit }, appID) {
        AppService.getApp(appID)
            .then((data) => {
                commit('setApp', data);
            })
            .catch(({ response }) => {
                commit('setError', response.data.message);
            });
    },

};

const mutations = {
    setError(state, error) {
        state.errors = error;
    },
    setAppList(state, appList) {
        state.appList = appList;
    },
    setApp(state, app) {
        state.app = app;
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};