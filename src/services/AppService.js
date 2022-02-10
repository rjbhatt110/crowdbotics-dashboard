import axios from 'axios';
import tokenService from "../services/tokenService";

const url = 'https://hiring-example-25770.botics.co/';
export default {
    // Create New App
    createApp(appDetails) {
        return axios
            .post(url + 'api/v1/apps/', appDetails, {
                headers: {
                    'Authorization': `Token ${tokenService.getToken()}`
                }
            })
            .then(response => {
                return response.data
            });
    },

    // Edit App
    editApp(appDetails) {
        return axios
            .put(url + `api/v1/apps/${appDetails.id}`, appDetails, {
                headers: {
                    'Authorization': `Token ${tokenService.getToken()}`
                }
            })
            .then(response => {
                return response.data
            });
    },

    // Delete App
    deleteApp(appID) {
        return axios
            .delete(url + `api/v1/apps/${appID}`, {
                headers: {
                    'Authorization': `Token ${tokenService.getToken()}`
                }
            })
            .then(response => {
                return response.data
            });
    },

    // Get All App
    getAllApp() {
        return axios.get(url + '/api/v1/apps/', {
            headers: {
                'Authorization': `Token ${tokenService.getToken()}`
            }
        }).then(response => response.data);
    },
};