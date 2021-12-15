import { Button, HeadingStyle, LandingPageDisplay } from "../styles/commons";
import {LoginPage} from "./login"
import {SignupPage} from "./signup"
import { FC, useState } from "react";
import { useContext } from "react";
import {appContxt} from "../common/appContext";
import { Tasks } from "./posts";

export const Landing:FC = () => {
    const context = useContext(appContxt);
    const [showLogin, setShowLogin] =useState(false);
    const [showSignup, setShowSignup] =useState(false);

    const getDisplay= ()=>{
        if(context.loggedIn === true) {
            return <Tasks/>
        }
        else if(showLogin){
            return <LoginPage/>;
        }
        else if(showSignup){
            return <SignupPage/>;
        }
        else {
            return (
            <LandingPageDisplay>
                <HeadingStyle>WELCOME!</HeadingStyle>
                <Button darkMode={false} onClick={()=>setShowLogin(true) }> Login</Button>
                <Button darkMode={false} onClick={()=>setShowSignup(true)}> Signup </Button>
            </LandingPageDisplay>);
        }
    }  

    return (
        getDisplay()
    );
}; 