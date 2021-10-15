import { createSlice } from '@reduxjs/toolkit';
import { Children } from 'react';

export enum GenderEnum {
    female = 'female',
    male = 'male',
    other = 'other'
}

interface ISetting {
    filter: {
        gender: GenderEnum | null
    };
    itemsPerRequest: number;
    nationality: string,
    showSettingsModal: boolean
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

const initialState: ISetting = {
    filter: {
        gender: null
    },
    itemsPerRequest: 50,
    showSettingsModal: false,
    nationality: ''
}

const setting = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        toggleSettingModal: (state, action) => {
            state.showSettingsModal = action.payload
        },
        updateItemsPerRequest: (state, action) => {
            state.itemsPerRequest = action.payload
        },
        updateGender: (state, action) => {
            state.filter.gender = action.payload
        },
        updateNationality: (state, action) => {
            state.nationality = action.payload
        }
    }
})

export const { toggleSettingModal, updateItemsPerRequest, updateGender, updateNationality } = setting.actions;
export default setting.reducer