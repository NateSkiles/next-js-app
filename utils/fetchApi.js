import axios from "axios";
import { loadEnvConfig } from '@next/env'

const API_KEY = process.env.API_KEY
export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': `${API_KEY}`,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
}