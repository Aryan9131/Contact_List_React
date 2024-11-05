import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from "../Slices/ContactSlice";

export const store = configureStore({
    reducer: {
        Contacts: ContactSlice
    }
});
