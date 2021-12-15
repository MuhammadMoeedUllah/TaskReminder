import { FC, createContext, useState } from "react";
import {initialContext} from "./constants"
export const appContxt = createContext(initialContext);

export const ContextProvider :FC = (props) => {

    const [MyContext, SetMyContext ] = useState(initialContext);

    const value = {
        loggedIn: MyContext.loggedIn,
        email:MyContext.email,
        uid:MyContext.uid,
        updateContext: SetMyContext,
    };
    return <appContxt.Provider value={value}> {props.children}</appContxt.Provider>
}

