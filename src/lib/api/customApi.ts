import axios from 'axios';

const customApi = axios.create({
  baseURL: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
});

export default customApi;
