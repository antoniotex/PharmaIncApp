import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const patient = createSlice({
    name: 'patient',
    initialState:{
        list: [
            { id: 1, name: 'Mr Eleazar Ribeiro', gender: 'male', dob: '12/09/1988', picture: 'https://randomuser.me/api/portraits/thumb/men/62.jpg'}
        ]
    },
    reducers:{
        updatePatientList(state, action: PayloadAction<any>){
            state.list = action.payload.list
        }
    }
})

export const { updatePatientList } = patient.actions;
export default patient.reducer