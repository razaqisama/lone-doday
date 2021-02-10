import axios from 'axios';
export function fetchData(url){
  return axios({
    method: 'GET',
    url: url,
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
}