const axios = require('axios');

const config = {
    
    baseURL: process.env.VUE_APP_BASE_URL
};

const apiClient = axios.create(config);

export default {
    get(urlComplement,params,headers){
        
        return apiClient.get( urlComplement,{
                headers: headers,
                params: params
            }
        )
    },
    post(urlComplement,body,config){
        return apiClient.post(`/${urlComplement}`,body,config)
    }
};