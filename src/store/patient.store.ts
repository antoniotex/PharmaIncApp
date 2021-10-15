import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPatientCard } from './../interfaces/IPatientCard';
import { GenderEnum } from './setting.store';

interface Filter {
    gender: GenderEnum | null;
    itemsPerRequest: number;
    nationality: string,
}

export const getPatients = createAsyncThunk('patient/getPatients', async (query: Filter) => {
    // const response = await API.get('ttps://randomuser.me/api?results=50')
    // return response.data
    const gender = query?.gender ? `&gender=${query.gender}` : ''
    const itemsPerRequest = query?.itemsPerRequest ? query.itemsPerRequest : 50
    const nationality = query?.nationality ? `&nat=${query.nationality}` : ''

    return fetch(
        `https://randomuser.me/api?results=${itemsPerRequest}&inc=${patientFields}${gender}${nationality}`
    ).then((res) => res.json())
});

const patientFields = 'name,gender,location,email,login,dob,phone,cell,picture,nat,id'

interface Patient {
    list: IPatientCard[];
    originalList: IPatientCard[];
    loading: boolean;
    showModal: boolean;
    currentPatient?: IPatientCard
}

const initialState: Patient = {
    list: [],
    originalList: [],
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
        },
        filterPatientList: (state, action) => {
            state.list = state.originalList
            state.list = state.list.filter((patient) => {
                const name = `${patient.name.title} ${patient.name.first} ${patient.name.last}`
                return name.toLowerCase().includes(action.payload.toLowerCase())
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPatients.fulfilled, (state, action) => {
            state.list = action.payload.results
            state.originalList = action.payload.results
        })
    }
})

export const { togglePatientModal, updateCurrentPatient, filterPatientList } = patient.actions;
export default patient.reducer