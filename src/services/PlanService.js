import axios from 'axios';
import tokenService from "../services/tokenService";

const url = 'https://hiring-example-25770.botics.co/';
export default {
    // Add Plan to App
    addPlan(appDetails) {
        console.log(appDetails)
        return axios
            .post(url + '/api/v1/subscriptions/', appDetails, {
                headers: {
                    'Authorization': `Token ${tokenService.getToken()}`
                }
            })
            .then(response => {
                return response.data
            });
    },

    // Edit App
    editPlan(planDetails) {
        return axios
            .put(url + `/api/v1/subscriptions/${planDetails.subscriptionID}`, planDetails, {
                headers: {
                    'Authorization': `Token ${tokenService.getToken()}`
                }
            })
            .then(response => {
                return response.data
            });
    },

    // Get All Plans
    getAllPlans() {
        return axios.get(url + '/api/v1/plans/', {
            headers: {
                'Authorization': `Token ${tokenService.getToken()}`
            }
        }).then(response => response.data);
    },

    // Get Subscriptions
    getSubscriptions(id) {
        return axios.get(url + `/api/v1/subscriptions/${id}`, {
            headers: {
                'Authorization': `Token ${tokenService.getToken()}`
            }
        }).then(response => response.data);
    },
};