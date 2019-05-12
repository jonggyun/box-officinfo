import axios from 'axios';

const customApi = axios.create({
  baseURL: 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/',
});

export default customApi;
