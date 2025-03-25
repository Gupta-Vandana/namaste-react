import { useState } from "react";
import ItemList from "./ItemList";
import ItemCart from "./ItemCart";

const ResItemCategory = (props) => {
    const { category } = props;
    const { updateIndex } = props;
    const { showIndex } = props;
    //const [showItems, setShowItems] = useState(false);
    const handleOnClick = () => {
        updateIndex();
        
    }
    
    const [cartItems, setCartItems] = useState(0);
    const handleCartIncrement = () => {
        setCartItems(cartItems + 1);
    }

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer"
                    onClick={handleOnClick }
                >
                 <span className="font-bold text-lg">{category.title} ({category.itemCards.length})</span>
                    <span>↓</span>
                </div>
               {showIndex && <ItemList item={category.itemCards} />}
                
            </div>
            <div className="w-2/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <ItemCart cartItems={cartItems} onIncrement={handleCartIncrement } />
            </div>
        </div>
    
    );
}

export default ResItemCategory;