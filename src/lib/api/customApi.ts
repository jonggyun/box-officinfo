import axios from 'axios';

// http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101
const customApi = axios.create({
  baseURL: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
});

export default customApi;
