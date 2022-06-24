//자동토큰갱신을 위해 필요한 파일 수정 필요
import axios from "axios";
import { refresh } from "./tokenRefresh";

const baseUrl = 'https://pounder-vote.shop/api';

const Api = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  params: {},
});

Api.interceptors.request.use(refresh);

export default Api;