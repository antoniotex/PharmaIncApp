import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import RandomUserAPI from '../services/RandomUserAPI';
import { IPatientCard } from './../interfaces/IPatientCard';
import { GenderEnum } from './filter.store';

interface Filter {
    gender: GenderEnum | null;
    itemsPerRequest: number;
    nationality: string,
}

export const getPatients = createAsyncThunk('patient/getPatients', async (query: Filter) => {
    const gender = query?.gender ? `&gender=${query.gender}` : ''
    const itemsPerRequest = query?.itemsPerRequest ? query.itemsPerRequest : 50
    const nationality = query?.nationality ? `&nat=${query.nationality}` : ''

    const result = await RandomUserAPI.get<Result>(`?results=${itemsPerRequest}&inc=${patientFields}${gender}${nationality}`)

    return result.data
});

const patientFields = 'name,gender,location,email,login,dob,phone,cell,picture,nat,id'

interface Result {
    results: IPatientCard[]
}

interface Patient {
    list: IPatientCard[];
    originalList: IPatientCard[];
    loading: boolean;
    showModal: boolean;
    currentPatient?: IPatientCard;
    page: number
}

const initialState: Patient = {
    list: [],
    originalList: [],
    loading: false,
    showModal: false,
    page: 1
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
        },
        updatePage: (state) => {
            state.page++
        },
        resetPage: (state) => {
            state.page = 1
        },

    },
    extraReducers: (builder) => {
        builder.addCase(getPatients.fulfilled, (state, action: PayloadAction<Result>) => {
            console.log('ACTION 1:: ', action.payload.results)
            if(state.page > 1){
                state.list = [...state.list, ...action.payload.results]
            }else{
                state.list = action.payload.results
                state.originalList = action.payload.results
            }
            state.loading = false
        }).addCase(getPatients.pending, (state, action) => {
            state.loading = true
        })
    }
})

export const { togglePatientModal, updateCurrentPatient, filterPatientList, updatePage, resetPage } = patient.actions;
export default patient.reducer