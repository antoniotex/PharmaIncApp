import { createSlice } from '@reduxjs/toolkit';

enum Gender {
    female = 'female',
    male = 'male',
    other = 'other'
}

interface ISetting {
    filter: {
        gender: Gender | null
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
    showSettingsModal: true
}

const setting = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        toggleSettingModal: (state, action) => {
            state.showSettingsModal = action.payload
        }
    }
})

export const { toggleSettingModal } = setting.actions;
export default setting.reducer