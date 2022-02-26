import axios from 'axios';
import {ROOT_URL, AUTH_HEADER_STRING,  BASE_URL} from './index';

export function getData(req){
    //https://leehongkim.com/api/v1/data-get/?param1=project
    //https://leehongkim.com/api/v1/data-get/?param1=about
    //https://leehongkim.com/api/v1/data-get/?param1=concept
    //https://leehongkim.com/api/v1/data-get/?param1=about
	return axios({ method: 'GET', url: BASE_URL + `data-get/${req.query}`, data: null, headers: req.header })
}
