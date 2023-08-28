import axios from 'axios'
import { BASE_URL } from './constants'

const config = {
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
}

export const callAPI = async (resource) => {
    const { data } = await axios.get(`${BASE_URL}/${resource}`, config)
    return data
}

// callAPI is a function that accepts a 'resource'. this function return some data fom data present in public/data file. It awaits till the data is fetched using axios through config object

// URL will be like get('../data/products.json')