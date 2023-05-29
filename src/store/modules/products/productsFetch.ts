import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const api = axios.create({
    baseURL: 'https://kellylacosetiarasserver.herokuapp.com'
})

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async (): Promise<any> => {
        const [
            lacos,
            destaques,
            paris,
            tiaras,
            acessorios
        ] = await Promise.all([
            api.get('/catalogo/lacos'),
            api.get('/catalogo/destaques'),
            api.get('/catalogo/colecaoparis'),
            api.get('/catalogo/tiaras'),
            api.get('/catalogo/acessorios')
        ])
        return {
            lacos: lacos.data,
            destaques: destaques.data,
            paris: paris.data,
            tiaras: tiaras.data,
            acessorios: acessorios.data
        }
    }
)