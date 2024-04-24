import { createContext } from "react";

const userContext = createContext({
    loggedInUser : "default User"
})

export default userContext;