import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const api = axios.create({
    baseURL: 'https://kellylacosetiarasserver.herokuapp.com'
})

export const checkoutFetch: any = createAsyncThunk(
    "cart/checkoutFetch",
    async (order: any) => {
        const checkout = await api.post('/pedido', order)
        return checkout.data
        console.log(checkout)
    }
)

export const shippingFetch: any = createAsyncThunk(
    "cart/shippingFetch",
    async (cep: any) => {
        const frete = await api.post('/frete', cep)
        return frete.data
    }
)