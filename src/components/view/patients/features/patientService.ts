import { camelCase } from 'lodash';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/utils/interceptor';
// import { CommonPatientConfig } from '../commonPatientConfig';
import {storeStateReset} from './patientSlice'

export const callPatientListApi = createAsyncThunk(
    'patient/callPatientListApi',
    async ({input, title}: any) => {
        // const res = await api.get(CommonItemConfig.GET_ALL_ITEMS);
        // const data = await res.data;
        const {data} = await api({
            method: input['method'],
            url: input['component']+'/'+input['endPoint'],
            headers: {},
            data: {}
        })
        return {data, title: camelCase(`${title}_list`)};
    }
)

export const callPatientGetByApi = createAsyncThunk(
    'patient/callPatientGetByApi',
    async ({input, title}: any) => {
        // const res = await api.get(CommonItemConfig.GET_ITEM_BY_ID, {
        //     params: input
        // });
        // const data = await res.data;
        // return {data, title: camelCase(`get_${title}`)};

        const {data} = await api({
            method: input['method'],
            url: input['component']+'/'+input['endPoint'],
            headers: {},
            data: {}
        })
        return {data, title: camelCase(`get_${title}`)};
    },
)

export const callPatientSaveApi = createAsyncThunk(
    'patient/callPatientGetByApi',
    async ({input, title, isUpload = false}: any) => {
        const {data} = await api({
            method: input['method'],
            url: input['component']+'/'+input['endPoint'],
            headers: {},
            data: isUpload ? input['postedData'] : JSON.stringify(input['postedData'])
        })
        return {data, title: camelCase(`save_${title}`)};
    },
)

export const patientStoreStateReset = (input: any) => {
    return storeStateReset({
        data: input.data,
        title: input.name
    });
};