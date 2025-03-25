const ItemCart = ({ cartItems, onIncrement }) => {
    
    return (<div>
        <button onClick={onIncrement}>
            Add Item : {cartItems}
        </button>
    </div>)

}

export default ItemCart;