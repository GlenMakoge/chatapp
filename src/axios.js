import axios from 'axios'

const instances = axios.create({
    baseURL: "http://localhost:9000",
});

export default instances;