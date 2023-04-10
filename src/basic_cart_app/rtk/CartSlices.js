// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
export const CartSlice=createSlice(
    {
        initialState:[],
        name:"CartSlices",
        reducers:
        {
            clearcart:(state,action)=>{
            
                return state=[];
            },
            addcart:(state,action)=>{
                const finditem=state.find((product)=>product.id===action.payload.id);
                console.log(finditem);
                if(finditem)
                {
                    finditem.quantity+=1;
                }
                else
                {
                    const productclone={...action.payload,quantity:1};
                    state.push(productclone);
                }
            },
            deletefromcart:(state,action)=>{
               return state.filter((product)=> product.id!==action.payload.id)
            },
        }
    }
)
export const {addcart,deletefromcart,clearcart}=CartSlice.actions;
export default CartSlice.reducer;

