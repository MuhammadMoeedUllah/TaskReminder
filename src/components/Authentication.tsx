import { FC, useState } from "react";
import {authButtonState } from "../common/constants";
import {authProps,authTypes} from "../common/types";
import { Login } from "./login";
import {LoginPageDisplay} from "../styles/commons"
import { Signup } from "./signup";
export const Authentication: FC<authProps> = (authdescription)=>{
    const [loginVisbility , setLoginVisibility ] = useState(authButtonState);
    const revealLoginFace = ()=>{
        setLoginVisibility({revealLogin:true});
    };
    const revealSignupFace = ()=>{
        setLoginVisibility({revealSignup:true});
    };
    
    const authComponant = ()=>{
        switch (authdescription.component) {
            case authTypes.login:
                return <Login isRevealed={loginVisbility.revealLogin||false} revealFace={revealLoginFace}/>;
            case authTypes.signup:
                return <Signup isRevealed={loginVisbility.revealSignup || false} revealFace={revealSignupFace}/>
        }
    }

    return (<LoginPageDisplay> <h2> {authdescription.headline} </h2> 
    {authComponant()}
    </LoginPageDisplay>);
}