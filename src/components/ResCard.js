
const ResCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card" >
            <div className="res-logo">
                <img className="res-logo-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId} alt="res-logo"></img>
            </div>
            <div className="res-name">
                <h4 >{resData.info.name}</h4>
            </div>
            {/* <div className="cuisine">
                <h4 >{resData.info.cuisines.join(', ')}</h4>
            </div> */}
            <div className="star-rating">
                <h4 >{resData.info.totalRatingsString}</h4>
            </div>
            <div className="delivery-time">
                <h4 >{resData.info.areaName}</h4>
            </div>
        </div>
    );
};

export default ResCard;