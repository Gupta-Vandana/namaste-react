
const ResCard = (props) => {
    const { resData } = props;
    return (
        <div className="m-4 p-4 w-[250px] rounded-2xl hover:bg-gray-300">
            <div className="res-logo">
                <img className="rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId} alt="res-logo"></img>
            </div>
            <div className="font-bold py-3">
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

export const withAvgRating = (ResCard) => {
    return (props) => {
        const { resData } = props;
        return (
            <div>
                <label className=" absolute bg-black text-white m-2 p-2 rounded-2xl">
                    {resData.info.avgRating}
                </label>
                <ResCard {...props} />
            </div>
        )
    }
}
export default ResCard;