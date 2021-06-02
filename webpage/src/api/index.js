import axios from 'axios';

const url = 'http://localhost:420';

export const fetchreq = (req,project) => axios.post(url+'/'+project, req);
