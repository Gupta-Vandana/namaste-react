const RestaurantMenuItem = (props) => {
const { restaurantMenuItem } = props;
    return (<div className="restaurant-menu-item">
        <li>{restaurantMenuItem.card.info.name}</li>
        <h4>{restaurantMenuItem.card.info.rating}</h4>
    </div>)
}
export default RestaurantMenuItem;