import { api } from './cartFetch'
import { describe, expect, it } from 'vitest'



describe('Eu quero enviar um pedido', () => {
    it('Isso deve enviar o pedido no metodo post', async () => {
        const pedido = await api.post('/pedido',
            {
                "name": "Rafael",
                "phone": "123456789",
                "email": "rafale@gmail.com",
                "total_order": 39,
                "discount": null,
                "products_quantity": 1,
                "shipping_total": 1,
                "Products": [
                    {
                        "id_product": 1,
                        "id_product_size": null,
                        "id_product_color": null,
                        "id_product_material": null,
                        "amount": 1,
                        "unit_value": 39,
                        "percentage_discount": null
                    }
                ]
            })
        expect(pedido.status).toBe(201)
    })
})

