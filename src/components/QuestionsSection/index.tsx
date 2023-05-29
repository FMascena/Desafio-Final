import React from 'react';
import Questions from '../Questions';

function QuestionsSection() {
  return (
    <div className='bg-bege-100'>
        <div className="container m-auto w-10/12">
            <Questions number='1' title='Como eu faço um pedido?' text='O processo é simples! Quando encontrar o item que deseja, só clicar no botão “Adicionar o carrinho” na página de descrição do produto desejado.'/>
            <Questions number='2' title='Como posso remover um produto de minha sacola de compras, se eu decidir que não desejo comprá-lo?' text='Basta clicar em “Remover“. Você também pode ajustar a quantidade de qualquer produto em sua sacola de compras clicando nos botões “+” ou “-“. Ou ainda inserir nova quantidade.'/>
            <Questions number='3' title='Quais formas de pagamento são aceitas?' text='Faça o pagamento da forma como preferir. Aceitamos PIX, transferência e cartões.'/>
            <Questions number='4' title='Tem frete?' text='Sim, o frete fica por conta da cliente e pode ser calculado no carrinho.'/>
            <Questions number='5' title='Quanto tempo leva até meu pedido chegar?' text='Em média, os pedidos levam de 5 a 7 dias, dependendo da localidade. O prazo de entrega pode variar de acordo com o CEP. Quaisquer problemas inesperados após o envio do item serão informados no nosso canal de compras.'/>
            <Questions number='6' title='Como devolvo um produto?' text='Se você não estiver satisfeito com seu pedido, poderá devolvê-lo em até 7 dias após a data de entrega. Você precisará enviar uma mensagem pelos canais disponíveis explicando o motivo da devolução. Caso o problema seja nosso, ofereceremos uma maneira de devolvê-lo gratuitamente, ou você poderá optar por trocar por outro item ou ainda obter um crédito na loja. Se a insatisfação for por motivos pessoais, você deverá arcar com os custos de envio da devolução. Buscamos sempre a melhor solução para nossos clientes.'/>
            <Questions number='7' title='Posso cancelar ou modificar meu pedido?' text='Sim, embora seu pedido seja enviado imediatamente após o atendimento, caso ainda não tiver sido, pode haver o cancelamento ou modificação. Se já foi, os custos de devolução ficam por conta do cliente. Entre em contato conosco imediatamente nesses casos.'/>
            <Questions number='8' title='Caso eu tenha inserido um endereço errado, é possível reenviar o meu pedido?' text='Se o seu pedido ainda não tiver sido entregue à transportadora, nos envie uma mensagem o quanto antes com o endereço correto.'/>
        </div>
    </div>
  );
}

export default QuestionsSection;