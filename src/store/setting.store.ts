import { createSlice } from '@reduxjs/toolkit';

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

const initialState: ISetting = {
    filter: {
        gender: null
    },
    itemsPerRequest: 25,
    nationality: '',
    showSettingsModal: false
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
        }
    }
})

export const { toggleSettingModal, updateItemsPerRequest, updateGender } = setting.actions;
export default setting.reducer