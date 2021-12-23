import React from 'react'

const CartCard = (props) => {
    return (
        <div>
            <h3>
                <h3>{props.title}</h3>
                <p>{props.price.toFixed(2)}</p>
                <button onClick = {()=> props.removeFromCart(props.id)}>Remover</button>
            </h3>
        </div>
    )
}

export default CartCard