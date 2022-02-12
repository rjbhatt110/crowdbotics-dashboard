import AuthService from "../services/AuthService";
import tokenService from "../services/tokenService";
import router from "../router/index"

const state = {
    errors: null,
    key: {},
    isAuthenticated: !!tokenService.getToken()
};

const getters = {
    getKey(state) {
        return state.key;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};

const actions = {

    login({ commit }, credentials) {
        AuthService.login(credentials)
            .then((data) => {
                commit('setAuth', data.data.key);
            })
            .catch(({ response }) => {
                commit('setError', response.data.message);
            });
    },

    logout({ commit }) {
        AuthService.logout()
            .then(() => {
                commit('purgeAuth');
            })
            .catch(({ response }) => {
                commit('setError', response.data.message);
            });
    },

    register({ commit }, credentials) {
        AuthService.signUp(credentials)
            .then(({ data }) => {
                commit('setAuth', data.data.key);
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
    setAuth(state, key) {
        state.isAuthenticated = true;
        state.key = key;
        state.errors = null;
        tokenService.saveToken(state.key);
        router.push("/")
    },
    purgeAuth(state) {
        state.isAuthenticated = false;
        state.key = {};
        state.errors = null;
        tokenService.destroyToken();
        router.push("/login")
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};