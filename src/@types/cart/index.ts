import { Product } from "../products";

export interface CartState {
    cartItems: [] | Product[] | any,
    cartTotalQuantity: number,
    cartTotalAmount: number,
    checkoutItems: any,
    checkoutStatus: any
    shippingTotal: any,
    shippingFetchStatus: string
}

export interface Shipping {
    Codigo: number,
    Valor: string,
    PrazoEnrega: string,
    ValorMaoPropria: string,
    ValorAvisoRecebimento: string,
    ValorValorDeclarado: string,
    EntregaDomiciliar: string,
    EntregaSabado: string,
    Erro: string,
    MsgErro: string,
    ValorSemAdicionais: string,
    obsFim: string
}