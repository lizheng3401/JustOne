import axios from 'axios';

let hitokoto = "https://v1.hitokoto.cn/"


export const getword = params => { return axios.get(`${hitokoto}`, params)}