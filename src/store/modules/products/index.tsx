import { createSlice } from '@reduxjs/toolkit'
import { productsInitialState } from '../../../@types/products'
import { productsFetch } from './productsFetch'


const initialState: productsInitialState = {
    lacoList: [],
    destaquesList: [],
    colecaoparisList: [],
    tiarasList: [],
    acessoriosList: [],
    status: 'iddle'
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state, action) => {
                if (state.status === 'iddle') {
                    state.status = 'pending'
                }
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.lacoList = action.payload.lacos
                state.destaquesList = action.payload.destaques
                state.colecaoparisList = action.payload.paris
                state.tiarasList = action.payload.tiaras
                state.acessoriosList = action.payload.acessorios
                state.status = 'fulfilled'
            })
            .addCase(productsFetch.rejected, (state, action) => {
                state.status = 'rejected'
            })
    }
})

export default productsSlice.reducer