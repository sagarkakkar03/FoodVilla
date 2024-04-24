import { useEffect, useState } from "react";

const useUsersOnlineStatus = ()=>{
    const [onlineStatus, setOnlineStatus] = useState(true)
    //check if user is online or not?
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false)
        })
        window.addEventListener("online", ()=>{
            setOnlineStatus(true)
        })
    }, [])
    return onlineStatus;

}

export default useUsersOnlineStatus;