import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchproduct=createAsyncThunk("ProductsSlices/fetchproducts",async()=>{  //طريقة استدعاء api بداخل redux-tooklit 
    const res=await fetch("https://fakestoreapi.com/products");//http://localhost:9000/products
    const data=await res.json();
    return data;
})

const ProductsSlices=createSlice(
    {
        initialState:[],
        name:"ProductsSlice",
        reducers:{},
        extraReducers:(builder)=>   //طريقة استخدام api القادم من asyncthunk باستخدام extrareducers 
        {
            builder.addCase(fetchproduct.fulfilled,(state,action)=>{
                return action.payload;
            })
        }
    }
)

export const {}=ProductsSlices.actions;
export default ProductsSlices.reducer;