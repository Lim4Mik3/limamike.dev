import axios from "axios";

export const HttpClient = axios.create({
  baseURL: 'https://fake-api.tractian.com',
  headers: {
    'Content-Type': 'application/json'
  }
})