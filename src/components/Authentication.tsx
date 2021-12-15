import { FC, Fragment, useState } from "react";
import {loginState, loginInitFaceProps} from "../common/constants";
import {authProps,authTypes} from "../common/types";
import { Login } from "./login";
import {LoginPageDisplay} from "../styles/commons"
export const Authentication: FC<authProps> = (authdescription)=>{
    const [loginVisbility , setLoginVisibility ] = useState(loginState);
    const revealFace = ()=>{
        console.log("FACE IS NOW REVEALED");
        setLoginVisibility({isLoggedin:false,revealFace:true});
    };
    loginInitFaceProps.isRevealed = loginVisbility.revealFace;
    loginInitFaceProps.revealFace =revealFace;

    const authComponant = ()=>{
        switch (authdescription.component) {
            case authTypes.login:
                return <Login {...loginInitFaceProps}/>;

        }
    }

    return (<LoginPageDisplay> <h2> {authdescription.headline} </h2> 
    {authComponant()}
    </LoginPageDisplay>);
}