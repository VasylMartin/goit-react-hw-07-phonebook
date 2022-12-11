import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactSlice";


export const store = configureStore({
    reducer: {
        phonebook: contactsSlice, 
    },
});