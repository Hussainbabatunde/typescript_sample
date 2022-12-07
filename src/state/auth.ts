import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

// export interface LoginState {
//     success: boolean,
//     error: boolean,
//     loggedIn: boolean,
//     loading: boolean,
//     message:any
// }

type GreetProps ={
    email: string,
    password: string
}

// const initialState: LoginState = {
//     success: false,
//     error: false,
//     loggedIn: false,
//     loading: false,
//     message: ""
// }
export interface IUsersList {
  isLoadingUsers: boolean;
  accessToken?: string,
  authtoken: string,
  success: boolean,
  error: boolean,
  message: null,
  products: IProduct[]
}

export interface IProduct{
  id: number,
  name: string,
  quantity: string,
  price: string,
  seller:{
    id: number,
    name:string
  }
}


const initialState: IUsersList = { 
  isLoadingUsers: false,
   authtoken: "", 
   success: false, 
   error: false , 
   message: null,
   products: []
  };


export const RegisterAuth = createAsyncThunk(
    "auth/register",
    async (register: GreetProps, { rejectWithValue }) => {
      const instance = axios.create({
        baseURL: "https://todo-api-assessment-production.up.railway.app/",
        timeout: 20000,
  
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
      return await instance
        .post("login", register)
        .then((response) => {
          console.log("register", response.data);
          localStorage.setItem("token", response.data.token)
          return response.data;
        })
        .catch((error) => {
          if (error.message === "Network Error") {
            return rejectWithValue(error.response);
          } else {
            return rejectWithValue(error.response);
          }
        });
    }
  );


  export const ProductsDetaiis = createAsyncThunk(
    "productdetails",
    async (_, { rejectWithValue }) => {
      const instance = axios.create({
        baseURL: "https://exportsandsell.bcodestech.com/api/",
        timeout: 20000,
  
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return await instance
        .get("products")
        .then((response) => {
          console.log("products gotten ", response.data.data);
          return response.data;
        })
        .catch((error) => {
          if (error.message === "Network Error") {
            return rejectWithValue(error.response);
          } else {
            return rejectWithValue(error.response);
          }
        });
    }
  );


const authSlice = createSlice({
  name:"authtokenreducer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder
    .addCase(RegisterAuth.pending, (state)=>{
        state.isLoadingUsers = true;
    })
    .addCase(RegisterAuth.fulfilled, (state, action: PayloadAction<any>)=>{
        console.warn("login response ", action.payload.token)
        console.warn(state)
        state.isLoadingUsers= true;
        state.authtoken= action.payload.token;
        state.success = true;
        console.warn("authtoken" ,state)

    })
    .addCase(RegisterAuth.rejected, (state, action: PayloadAction<any>)=>{
        state.error= true;
        state.isLoadingUsers= false;
        state.message= action.payload;
    })
    .addCase(ProductsDetaiis.pending, (state)=>{
      state.isLoadingUsers = true;
    })
    .addCase(ProductsDetaiis.fulfilled, (state, action: PayloadAction<IProduct[]>)=>{
      console.warn("product response ", action.payload)
      state.isLoadingUsers= true;
      state.products= action.payload;

    })
    .addCase(ProductsDetaiis.rejected, (state, action: PayloadAction<any>)=>{
      state.error= true;
      state.isLoadingUsers= false;
      state.message= action.payload;
    })
    
}
})

export const authtoken = (state: IUsersList) => state.authtoken;

export default authSlice.reducer;
  