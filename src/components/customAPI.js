//자동토큰갱신을 위해 필요한 파일 수정 필요
import axios from 'axios';
//import { refresh } from "./tokenRefresh";

const API = axios.create({
  baseURL: 'https://pounder-vote.shop/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

//Api.interceptors.request.use(refresh);

export default API;
