import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})
export const deleteData=createAsyncThunk("deleteData",async(id)=>{
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return id
})
export const updateData=createAsyncThunk("updateData",async(update)=>{
    const response =  await axios.put(`https://jsonplaceholder.typicode.com/posts/${update.id}`,update)
    return response.data
})
const operation = createSlice({
    name: "CRUD",
    initialState: {
        data: null
    },
    extraReducers: (builder) => {
            builder.addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            }),
            builder.addCase(deleteData.fulfilled,(state,action)=>{
                state.data=state.data.filter((ele)=>ele.id!==action.payload)
            }),
            builder.addCase(updateData.fulfilled,(state,action)=>{
                const {id}=action.payload;
                const index=state.data.findIndex((ind)=>ind===id)
                state.data[index]=action.payload
            })
    }

})
export const { ADD, DELETE, UPDATE } = operation.actions
export default operation.reducer