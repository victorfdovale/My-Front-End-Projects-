import React from 'react'
import CartCard from '../../components/CartCard'

export default class CartPage extends React.Component{

    render(){
        const cartComponents = this.props.cart.map((x) => {
            return <CartCard key={x.id} title={x.title} price={x.price} id={x.id} removeFromCart={this.props.removeFromCart}/>
        })
        return (
            <div>
                <h2>Carrinho</h2>
                {cartComponents.length > 0? (
                    <div>
                    {cartComponents}
                    <button onClick={()=>this.props.clearCart()}>Finalizar Compra</button>
                    <button onClick={()=>this.props.changePage('list')}>Voltar para lista</button>
                    </div>
                    ): (
                    <h2>Carrinho Vazio</h2>
                    )}
            </div>
        )
    }
}