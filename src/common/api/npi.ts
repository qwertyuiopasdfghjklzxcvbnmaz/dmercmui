import customAxios from '../../utils/interceptor';
// export const GET_NPI_BY_NAME = () => customAxios.get('items/api/getProcedureCodeByName?procedureName=Crutches');
export const GET_NPI_BY_NAME = (data: any) => customAxios.get('items/api/getProcedureCodeByName?procedureName=', data);
export const GET_ALL_NPI = () => customAxios.get('items/api/getAllProcedureCode');

const npi = {
    GET_ALL_NPI,
    GET_NPI_BY_NAME
}

export default npi;