// src/lib/customApi.ts
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