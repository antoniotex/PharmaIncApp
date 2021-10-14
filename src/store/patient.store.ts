import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPatientCard } from './../interfaces/IPatientCard';

export const getPatients = createAsyncThunk('patient/getPatients', async () => {
    // const response = await API.get('ttps://randomuser.me/api?results=50')
    // return response.data
    return fetch('https://randomuser.me/api?results=50').then((res) => res.json())
});

interface Patient {
    list: IPatientCard[];
    loading: boolean;
    showModal: boolean;
    currentPatient?: IPatientCard
}

const initialState: Patient = {
    list: [],
    loading: false,
    showModal: false
}

const patient = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        togglePatientModal: (state, action) => {
            state.showModal = action.payload
        },
        updateCurrentPatient: (state, action) => {
            state.currentPatient = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPatients.fulfilled, (state, action) => {
            state.list = action.payload.results
        })
    }
})

export const { togglePatientModal, updateCurrentPatient } = patient.actions;
export default patient.reducer