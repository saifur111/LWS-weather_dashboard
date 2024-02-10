/* eslint-disable react/prop-types */
import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";
import { useFavouriteData } from "../../provider/FavouriteProvider";

function Favourite({ onShow }) {
    const { favourites } = useFavouriteData();
    return (
        <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={favourites.length>0?RedHeartIcon:HeartIcon} alt="heart" />
            <span onClick={onShow}>Favourite Locations</span>
        </div>
    );
}

export default Favourite;