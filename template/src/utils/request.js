import axios from 'axios';
import config from '../config';

// 创建axios实例
const service = axios.create({
  baseURL: config.apiBaseUrl,
  // 请求超时时间
  timeout: 5000,
  withCredentials: true,
});

export default service;
