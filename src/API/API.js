import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://ec2-3-38-228-115.ap-northeast-2.compute.amazonaws.com/api',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 2500,
  });