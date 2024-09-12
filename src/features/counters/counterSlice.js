const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
    {
        id: 1,
        value: 6,
    },
    {
        id: 2,
        value: 10,
    },
];

const counterSlice=createSlice({
    name: "counters",
    initialState,
    reducers: {
        increment: (state, action) => {
            
        }
        decrement: (state, action) => {

        }
    }
})