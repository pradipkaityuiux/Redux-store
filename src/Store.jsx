import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accounts/accountSlice";
import customerReducer from "./customers/customerSlice";

const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer
    }
})

export default store;