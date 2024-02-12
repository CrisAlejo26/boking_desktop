import { createAsyncThunk } from "@reduxjs/toolkit";

export const thunkLoadState = createAsyncThunk(

    'thunkLoadState',

    async ({password, email}: {password: string, email: string}, { rejectWithValue }) => {

        console.log(password);
        console.log(email);

        try {
            console.log("respuesta");
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)