import { createSlice } from "@reduxjs/toolkit"
const initialStateCustomer = {
    fullname: "",
    nationalId: "",
    createdAt: ""
}
const customerSlice = createSlice({
    name: "customer",
    initialState: initialStateCustomer,
    reducers:{
        createCustomer:{
            prepare(fullname,nationalId,createdAt){
                return{
                    payload:{fullname,nationalId,createdAt}
                }
            },
            reducer(state, action){
                state.fullname= action.payload.fullname
                state.nationalId= action.payload.nationalId
                state.createdAt= action.payload.createdAt 
            }
        },
        updateName(state,action){
            state.fullname = action.payload
        }
    }
})
export default customerSlice.reducer;
export const {createCustomer, updateName} = customerSlice.actions;