import axios from 'axios';
import { redirect } from 'next/navigation';
import sessionStore from '@/common/sessionStoreComponent';
import {showNotify} from '../common/showNotify'

// let accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJRREtnSU9kcUh2Y3R4Y0VPOW5KX19wc1VIa2JCb1BiTXZzbGZTTF9mT0cwIn0.eyJleHAiOjE2ODM2Mjk5MjYsImlhdCI6MTY4MzYxMTkyNiwianRpIjoiMjQ1MDZiZDYtNTI4Yy00NjkwLWJkOWYtMzdjMzM0MmM3ZjZmIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MDgwL2F1dGgvcmVhbG1zL2poaXBzdGVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImY3NDJiYTZmLTFkOGEtNGRlYy1iZjE1LWUwMmRhYjUwODI4MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImludGVybmFsIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SG9zdCI6IjE3Mi4xOC4wLjEiLCJjbGllbnRJZCI6ImludGVybmFsIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWludGVybmFsIiwiY2xpZW50QWRkcmVzcyI6IjE3Mi4xOC4wLjEifQ.I61SzYWBOT9aUlb-pKe-qveMdbVwVDxsdP3Qmqh7AbQomfUFnNyoz4mIFFgKsGe3izWU8i7Yr-G3ykjdJ8fXq99H9JUy1ZmmiFrm_QXk7zqnrPLJwhCEz_t5v-8k7n9fq6Hqz9qRIrU9PnE4bkCDLQCwcaG8tRoaZ3nDWYgELreWPvYodPZzNWHC5Q3U9hyimUFjGJce_a5Z6myqmJwUeSx3CB-NGpjdBTmO3UcHkzARF5qoiwZoaH-rHA2tI3R7ZG5Kg6ZZw26xKiKX4C41lego-_AvOpASC29cdfxeyY0sSbahfsYtKMp25f8b0MAMx0QuRLDA7lqSlqebJiSOug";
const session = new sessionStore();

const customAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json'
      },
    timeout: 10000
});

const requestHandler = (request: any) => {
    if (session.returnSessionToken()) {
        // if (accessToken) {
        // request.headers.Authorization = `Bearer ${accessToken}`;
        request.headers.Authorization = `Bearer ${session.returnSessionToken()}`;
    }
    return request;
};

const responseHandler = (response: any) => {
    if (response.status === 401) {
        redirect('/login');
    }
    // if(!!response.data.showMessage && !!response.data.message)
    //     showNotify(response.data.message, response.data.success === true ? 'success' : 'error');

    return response;
};

const errorHandler = (error: any) => {
    return Promise.reject(error);
};

customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
 );

export default customAxios;