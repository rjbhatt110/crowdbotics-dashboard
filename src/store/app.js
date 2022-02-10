import AppService from "../services/AppService";
// import router from "../router/index"

const state = {
    errors: null,
    appList: [],
};

const getters = {
    getAppList(state) {
        return state.appList;
    },
};

const actions = {

    createApp({ commit }, appDetails) {
        AppService.createApp(appDetails)
            .then((data) => {
                console.log(data)
            })
            .catch(({ response }) => {
                commit('setError', response.data.message);
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

};

const mutations = {
    setError(state, error) {
        state.errors = error;
    },
    setAppList(state, appList) {
        state.appList = appList;
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};