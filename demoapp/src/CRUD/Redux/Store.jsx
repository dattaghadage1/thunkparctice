import { configureStore } from "@reduxjs/toolkit";
import Operation from '../Redux/Resuceres/reducer1'
const Store=configureStore({
    reducer:{
        userData:Operation
    }
})
export default Store