import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employees: [],
};

const EmployeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        add: (state, action) => {
            state.employees.push({ ...action.payload });
        },
    },
});

export const employeeSelector = ({ employees }) => employees;

export const { add } = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
