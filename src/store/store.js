import { configureStore } from '@reduxjs/toolkit';
import EmployeeSlice from './employeeSlice';

export const store = configureStore({
    reducer: {
        employees: EmployeeSlice,
    },
});
