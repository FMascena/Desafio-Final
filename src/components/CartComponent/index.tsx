import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import FreteForm from "../FreteForm";
import TotalPrice from "../TotalPrice";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import { Product } from "../../@types/products";
import { useState } from "react";
import CheckoutModal from "../CheckoutModal";

function CartComponent() {
  const cart = useSelector((state: RootStore) => state.cart);
  const [active, setActive] = useState(false);

  const showModal = () => {
    setActive(!active);
  };

  return (
    <div className="flex justify-center bg-bege-100 md:pt-24">
      <div className="container">
        {cart.cartItems.length === 0 ? (
          <div className="h-screen flex justify-center pt-72">
            <div className='flex flex-col'>
              <p className="font-montserrat font-bold text-h3">
                Seu carrinho está vazio!
              </p>
              <Link
                to="/catalogo"
                className="font-semibold text-rosa-200 text-h4 underline underline-offset-1 text-center"
              >
                Começar a comprar
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="hidden md:flex border-b border-rosa-400 text-h5 mb-14 font-montserrat">
              <div className="flex justify-between w-9/12 pr-6">
                <h3 className="text-h3 flex w-8/12">PRODUTOS</h3>
                <div className="w-4/12 flex gap-12">
                  <h3 className="text-right text-h3">QUANTIDADE</h3>
                  <h3 className="text-h3">VALOR</h3>
                </div>
              </div>
            </div>
            <div className="container md:flex md:justify-between md:gap-5">
              <div className="w-full md:w-9/12">
                {cart.cartItems.map((product: Product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
              <div className="flex flex-col w-full md:w-3/12">
                <FreteForm />
                <TotalPrice subtotal={cart.cartTotalAmount} shipping={cart.shippingTotal} shippingStatus={cart}/>
                <button
                  onClick={showModal}
                  className="w-full bg-rosa-200 py-5 rounded-lg text-bege-100 mb-5 text-h3 font-semibold hover:bg-rosa-100"
                >
                  Enviar o Pedido
                </button>
                <Link
                  to="/catalogo"
                  className="text-center w-full text-rosa-200 underline underline-offset-1 text-h3 mb-5"
                >
                  Continuar comprando
                </Link>
                <CheckoutModal showModal={showModal} active={active} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartComponent;
