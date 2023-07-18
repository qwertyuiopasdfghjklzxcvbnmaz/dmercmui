import {PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { callItemListApi, callItemGetByApi } from './itemService';

// Define a type for the slice state
interface ItemsState {
    getItem: {}
    itemsList: [],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: any
}

// Define the initial state using that type
const initialState: ItemsState = {
    getItem: {},
    itemsList: [],
    loading: 'idle',
    error: ''
}

export const itemsSlice = createSlice({
    name: 'item',
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
        const {pending, fulfilled, rejected } = callItemListApi;
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

        // callItemGetByApi==================================
        builder.addCase(callItemGetByApi.pending, (state) => {
            state.loading = 'pending'
        })
        builder.addCase(callItemGetByApi.fulfilled, (state, action) => {
            const {data, title} = action.payload;
            state.loading = 'succeeded';
             /* @ts-ignore */
            state[title] = data;
            state.error = "";
        })
        builder.addCase(callItemGetByApi.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.error.message;
        })
    },
    
})

export const { storeStateReset } = itemsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.item.itemsList

export default itemsSlice.reducer