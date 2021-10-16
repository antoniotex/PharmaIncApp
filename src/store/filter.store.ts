import { createSlice } from '@reduxjs/toolkit';

export enum GenderEnum {
    female = 'female',
    male = 'male',
    other = 'other'
}

interface IFilter {
    filter: {
        gender: GenderEnum | null
        itemsPerRequest: number;
        nationality: string,
    };
    showFilterModal: boolean
}

export const countries = [
    { abbreviation: 'AU', name:'Australia'}, 
    { abbreviation: 'BR', name:'Brazil'}, 
    { abbreviation: 'CA', name:'Canada'}, 
    { abbreviation: 'CH', name:'Switzerland'}, 
    { abbreviation: 'DE', name:'Germany'}, 
    { abbreviation: 'DK', name:'Denmark'}, 
    { abbreviation: 'ES', name:'Spain'}, 
    { abbreviation: 'FI', name:'Finland'}, 
    { abbreviation: 'FR', name:'France'}, 
    { abbreviation: 'GB', name:'United Kingdom'}, 
    { abbreviation: 'IE', name:'Ireland'}, 
    { abbreviation: 'IR', name:'Iran'}, 
    { abbreviation: 'NO', name:'Norway'}, 
    { abbreviation: 'NL', name:'Netherlands'}, 
    { abbreviation: 'NZ', name:'New Zealand'}, 
    { abbreviation: 'TR', name:'Turkey'}, 
    { abbreviation: 'US', name:'United States'}
]

const initialState: IFilter = {
    filter: {
        gender: null,
        itemsPerRequest: 50,
        nationality: ''
    },
    showFilterModal: false,
}

const filter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleFilterModal: (state, action) => {
            state.showFilterModal = action.payload
        },
        updateItemsPerRequest: (state, action) => {
            state.filter.itemsPerRequest = action.payload
        },
        updateGender: (state, action) => {
            state.filter.gender = action.payload
        },
        updateNationality: (state, action) => {
            state.filter.nationality = action.payload
        }
    }
})

export const { toggleFilterModal, updateItemsPerRequest, updateGender, updateNationality } = filter.actions;
export default filter.reducer