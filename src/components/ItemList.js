import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const ItemList = (props) => {
    const { item } = props;
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    console.log(item);
    return (
        <div>
        {
                item.map((item) => (
            
                <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" key={item.card.info.id}>
                    <div>
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div>
                        <img className="w-14 h-auto" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId} />
                        <div>
                            <button className="p-2 bg-white shadow-lg m-auto" onClick={()=>handleAddItem(item)}>
                                Add+
                            </button>
                        </div>
                        </div>
                    </div>
            ))
        }
    </div>);
    
}

export default ItemList;