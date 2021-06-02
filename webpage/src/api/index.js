import axios from 'axios';

const url = 'http://localhost:420';

export const fetchreq = (req) => axios.post(url, req);
