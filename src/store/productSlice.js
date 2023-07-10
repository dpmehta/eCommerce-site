import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    status:"noprmal",
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers :{
        // fetchProducts(state,action){
        //     state.data = action.payload
        //  
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProduct.pending,(state,action) => {
            state.status = "loading";
        })
        .addCase(getProduct.fulfilled,(state,action) => {
            state.data = action.payload;
            state.status = "normal";
        })
    }
});

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;


//improvized way in redux toolkit
export const getProduct = createAsyncThunk('/products/get',async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();

    return result;
})


//old way to handle asynchronous actions in redux


// export function getProduct(){
//     return async function getProductThunk(dispatch,getState){
//         const data = await fetch("https://fakestoreapi.com/products");
//         const result = await data.json();
//         dispatch(fetchProducts(result));
//     }
// }