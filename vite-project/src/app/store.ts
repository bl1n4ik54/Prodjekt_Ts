import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../routes/Product/productSlice"
import contactSlice from "../routes/Contacts/contactsSlice"

let store = configureStore({
    reducer: {
        product: productSlice,
        cont: contactSlice
    }
})

export default store


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store