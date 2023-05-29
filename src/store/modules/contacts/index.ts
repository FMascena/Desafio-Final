import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Contact } from '../../../@types/contact'

const initialState: Contact = {
    name: '',
    email: '',
    description: '',
    status: 'iddle',
}

const api = axios.create({
    baseURL: 'https://kellylacosetiarasserver.herokuapp.com'
})

export const contactPersonalizedFetch: any = createAsyncThunk(
    "cart/contactPersonalizedFetch",
    async (contact: Contact) => {
        await api.post('/personalizado', contact)
    }
)
export const contactFetch: any = createAsyncThunk(
    "cart/contactFetch",
    async (contact: Contact) => {
        await api.post('/duvida', contact)
    }
)

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
    },
    extraReducers: {
        [contactPersonalizedFetch.pending]: (state: Contact) => {
            state.status = 'pending'
        },
        [contactPersonalizedFetch.fulfilled]: (state: Contact) => {
            state.status = 'fulfilled'
            toast('Pedido enviado com sucesso!', {
                position: 'top-center'
            })
            state = initialState
        },
        [contactPersonalizedFetch.rejected]: (state: Contact) => {
            state.status = 'rejected'
            toast('Ocorreu um erro ao realizar o pedido, tente novamente!', {
                position: 'top-center'
            })
        },
        [contactFetch.pending]: (state: Contact) => {
            state.status = 'pending'
        },
        [contactFetch.fulfilled]: (state: Contact) => {
            state.status = 'fulfilled'
            toast('Mensagem enviada com sucesso!', {
                position: 'top-center'
            })
            state = initialState
        },
        [contactFetch.rejected]: (state: Contact) => {
            state.status = 'rejected'
            toast('Ocorreu um erro ao enviar sua mensagem, tente novamente!', {
                position: 'top-center'
            })
        }
    }
})

export default contactSlice.reducer