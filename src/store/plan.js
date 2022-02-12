import PlanService from "../services/PlanService";

const state = {
    errors: null,
    planList: [],
};

const getters = {
    getPlanList(state) {
        return state.planList;
    },
};

const actions = {

    editPlan({ commit }, planDetails) {
        PlanService.editPlan(planDetails)
            .then((data) => {
                console.log(data)
            })
            .catch(({ response }) => {
                commit('setError', response.data.message);
            });
    },

    fetchAllPlan({ commit }) {
        PlanService.getAllPlans()
            .then((data) => {
                commit('setPlanList', data);
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
    setPlanList(state, planList) {
        state.planList = planList;
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};