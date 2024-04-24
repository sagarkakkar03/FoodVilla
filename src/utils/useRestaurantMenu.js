
import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { Link } from "react-router-dom";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // console.log(resId)
    const Link = MENU_API + resId.resID;
    // console.log(Link)
    const data = await fetch(Link);
    const json = await data.json();
    // console.log(json)
    setResInfo(json.data);
  };
  
  return resInfo;
};

export default useRestaurantMenu;