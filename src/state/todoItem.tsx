import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';


const token = localStorage.getItem("token")

export const GetItems= createAsyncThunk(
    "gettingItems", async (_, {rejectWithValue})=>{
        const instance= axios.create({
            baseURL:"https://todo-api-assessment-production.up.railway.app/todo/",
            timeout: 20000,
            headers:{
                "Content-Type": "application/json",
                "Accept":"application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        return await instance.get("all")
        .then((response)=>{
            console.log(response.data)
            return response.data
        })
        .catch((error)=>{
            if(error.message=="Network error"){
                return rejectWithValue(error.response)
            }else{
                return rejectWithValue(error.response)
            }
        })
    }
)

type idtype= {
    id: string
}
export type Productshown= {
    description: string,
    title: string
}
export const GetIndividual = createAsyncThunk(
    "individualTtem", async (id: idtype, {rejectWithValue})=>{
        const instance= axios.create({
            baseURL: "https://todo-api-assessment-production.up.railway.app/todo/",
            timeout: 20000,
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        return await instance.get(`${id}`)
        .then(
            (response)=>{
                console.log(response.data)
                return response.data
            }
        )
        .catch(
            (error)=>{
                if(error.message== "Network error"){
                    return rejectWithValue(error.response)
                }
                else{
                    return rejectWithValue(error.response)
                }
            }
        )
    }
)

export const PutIndividual = createAsyncThunk(
    "putTtem", async ({id, data}: any, {rejectWithValue})=>{
        const instance= axios.create({
            baseURL: "https://todo-api-assessment-production.up.railway.app/todo/",
            timeout: 20000,
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        return await instance.put(`${id}`, data)
        .then(
            (response)=>{
                console.log(response.data)
                return response.data
            }
        )
        .catch(
            (error)=>{
                if(error.message== "Network error"){
                    return rejectWithValue(error.response)
                }
                else{
                    return rejectWithValue(error.response)
                }
            }
        )
    }
)

export const DeleteIndividual = createAsyncThunk(
    "deleteTtem", async (id: idtype, {rejectWithValue})=>{
        const instance= axios.create({
            baseURL: "https://todo-api-assessment-production.up.railway.app/todo/",
            timeout: 20000,
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        return await instance.delete(`${id}`)
        .then(
            (response)=>{
                console.log(response.data)
                return response.data
            }
        )
        .catch(
            (error)=>{
                if(error.message== "Network error"){
                    return rejectWithValue(error.response)
                }
                else{
                    return rejectWithValue(error.response)
                }
            }
        )
    }
)



export type getInit = {
    success: boolean,
    isLoadingUsers: boolean,
    message: null,
    error: boolean,
    failed: boolean,
    // todo: Productshown[]
    todoit:Productshown[]
    todo:indiItem
}
export type indiItem={
    todo:{
        description: string,
        title: string
    }
}
const initialState:getInit= {
    isLoadingUsers: false,
    message: null,
    success: false,
    error: false,
    failed: false,
    todoit: [],
    todo:{
        todo:{
        description:"",
        title:""
        }
    } 

    }

const GetitemSlice= createSlice({
    name:"getItemSlice",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(GetItems.pending, (state)=>{
            state.isLoadingUsers= true;
        })
        .addCase(GetItems.fulfilled, (state, action: PayloadAction<Productshown[]>)=>{
            console.log("gotten details", action.payload)
            state.isLoadingUsers= true;
            state.success = true;
            state.todoit = action.payload
        })
        .addCase(GetItems.rejected, (state, action :PayloadAction<any>)=>{
            state.error= true;
            state.isLoadingUsers= false;
            state.message = action.payload
        })
        .addCase(GetIndividual.pending, (state)=>{
            state.isLoadingUsers= true;
        })
        .addCase(GetIndividual.fulfilled, (state, action: PayloadAction<any>)=>{
            state.isLoadingUsers= true;
            state.success= true;
            state.todo= action.payload;
        })
        .addCase(GetIndividual.rejected, (state, action: PayloadAction<any>)=>{
            state.error= true;
            state.isLoadingUsers= false;
            state.message= action.payload
        })
        .addCase(PutIndividual.pending, (state)=>{
            state.isLoadingUsers= true;
        })
        .addCase(PutIndividual.fulfilled, (state, action: PayloadAction<any>)=>{
            state.isLoadingUsers= true;
            state.success= true;
            state.todo= action.payload;
        })
        .addCase(PutIndividual.rejected, (state, action: PayloadAction<any>)=>{
            state.error= true;
            state.isLoadingUsers= false;
            state.message= action.payload
        })
        .addCase(DeleteIndividual.pending, (state)=>{
            state.isLoadingUsers= true;
        })
        .addCase(DeleteIndividual.fulfilled, (state, action: PayloadAction<any>)=>{
            state.isLoadingUsers= true;
            state.success= true;
            state.todo= action.payload;
        })
        .addCase(DeleteIndividual.rejected, (state, action: PayloadAction<any>)=>{
            state.error= true;
            state.isLoadingUsers= false;
            state.message= action.payload
        })
    }
})

export default GetitemSlice.reducer;