import { configureStore } from "@reduxjs/toolkit";
import reduxSlice from '@/toolkit/slice'

export const store = configureStore({
    reducer: reduxSlice
})