import axios from 'axios'


const http = axios.create({
    baseURL: 'https://crud-api.hypetech.xyz/v1/',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'B1tD3V',
       'Authorization': `Bearer ${localStorage.getItem('token')}` 


    }
});

export default http