import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import patientReducer from './patient.store'
import settingReducer from './setting.store'

const store = configureStore({
    reducer: {
        patient: patientReducer,
        setting: settingReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store;
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()