import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './app/(dashboard)/test/features/counterSlice';
import itemsReducer from './components/view/item/features/itemSlice';
import patientsReducer from './components/view/patients/features/patientSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    item: itemsReducer,
    patient: patientsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;