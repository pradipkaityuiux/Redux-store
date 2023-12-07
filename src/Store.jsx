import { createStore, combineReducers } from "redux";

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}
const initialStateCustomer = {
    fullname: "",
    nationalId: "",
    createdAt: ""
}

//----------------------- Reducer Function for Handling Account --------------------
function accountReducer(state=initialStateAccount, action){
    switch(action.type){
        case "account/deposit":
            return { ...state, balance: state.balance + action.payload }
            case "account/withdraw":
                return { ...state, balance: state.balance - action.payload }
                case "account/reqLoan":
            if(state.loan > 0) return state;
            return { ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose, balance: state.balance + action.payload.amount }
        case "account/payLoan":
            return { ...state, loan: 0, balance: state.balance - state.loan, loanPurpose:"" }
        default:
            return state
    }
}

//----------------------- Reducer Function for Handling Account --------------------
function customerReducer(state = initialStateCustomer, action){
    switch(action.type){
        case "customer/createCustomer":
            return {
                ...state, 
                fullname: action.payload.fullname, 
                nationalId: action.payload.nationalId,
                createdAt: action.payload.createdAt 
            }
        case "customer/updateName":
            return {
                ...state,
                fullname: action.payload
            }
        default: return state
    }
}

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})
const store = createStore(rootReducer);
// store.dispatch({type:'account/deposit', payload: 500});
// console.log(store.getState());
// store.dispatch({type:'account/withdraw', payload: 20});
// console.log(store.getState());
// store.dispatch({type:'account/reqLoan', payload:{amount: 200000, purpose:'Buy a Aeroplane'}});
// console.log(store.getState());
// store.dispatch({type:'account/payLoan'});
// console.log(store.getState());



// ---------------------------- Functions for Handling Account Details -------------------
function deposit(amount){
    return {type:'account/deposit', payload: amount}
}
function withdraw(amount){
    return {type:'account/withdraw', payload: amount}
}
function requestLoan(amount, purpose){
    return {type:'account/reqLoan', payload: {amount, purpose}}
}
function payLoan(){
    return {type:'account/payLoan'}
}


// ---------------------------- Functions for Handling Customer Details -------------------
function createCustomer(fullname, nationalId){
    return {
        type: 'customer/createCustomer', 
        payload: {
            fullname, 
            nationalId, 
            createdAt: new Date().toDateString()
        }
    }
}
function updateName(fullname){
    return {
        type: "customer/updateName",
        payload: fullname
    }
}

store.dispatch(deposit(500));
store.dispatch(createCustomer("Hello", "1111"));
console.log(store.getState());