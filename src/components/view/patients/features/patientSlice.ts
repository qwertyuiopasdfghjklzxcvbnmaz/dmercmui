import {PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { callPatientListApi, callPatientGetByApi } from './patientService';

// Define a type for the slice state
interface PatientsState {
    getPatient: {}
    patientsList: [],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: any
}

// Define the initial state using that type
const initialState: PatientsState = {
    getPatient: {},
    patientsList: [],
    loading: 'idle',
    error: ''
}

export const patientsSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        storeStateReset: (state, action) => {
            const {data, title} = action.payload;
             /* @ts-ignore */
             state[title] = data;
            console.log(action.payload);
          },
     },
    extraReducers: (builder) => {
        const {pending, fulfilled, rejected } = callPatientListApi;
        builder.addCase(pending, (state) => {
            state.loading = 'pending'
        })
        builder.addCase(fulfilled, (state, action: PayloadAction<any>) => {
            const {data, title} = action.payload;
            state.loading = 'succeeded';
             /* @ts-ignore */
            state[title] = data;
            state.error = "";
        })
        builder.addCase(rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.error.message;
        })

        // callPatientGetByApi==================================
        builder.addCase(callPatientGetByApi.pending, (state) => {
            state.loading = 'pending'
        })
        builder.addCase(callPatientGetByApi.fulfilled, (state, action) => {
            const {data, title} = action.payload;
            state.loading = 'succeeded';
             /* @ts-ignore */
            state[title] = data;
            state.error = "";
        })
        builder.addCase(callPatientGetByApi.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.error.message;
        })
    },
    
})

export const { storeStateReset } = patientsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.patient.patientsList

export default patientsSlice.reducer