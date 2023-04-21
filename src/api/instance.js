import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast?lat=43.128056&lon=77.080833&appid=a0c7e9a0a1964632eefbcd706d6e8d00'
})