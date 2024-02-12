import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { thunkLoadState } from '../../thunks/thunk';
import { Data } from '../../interfaces';

const initialState: Data = {
    email: '',
    password: '',
    errorMessage: ''
}

export const stateSlice = createSlice({
    // nombre del state
    name: 'login',
    // como se inicializa el state
    initialState,
    reducers: {
        loginInFun: (state, action: PayloadAction<Data> ) => {
            const { email } = action.payload;
            state.email = email
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(thunkLoadState.fulfilled, (state, action) => {
                console.log(state.email);
                console.log(action.payload);
            })
            .addCase(thunkLoadState.rejected, (state, action) => {
                state.errorMessage = action.payload as string
            })
            
    }
});


// Action creators are generated for each case reducer function
export const { loginInFun } = stateSlice.actions;