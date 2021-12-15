import { useContext, useCallback } from "react";
import {appContxt} from "../../common/appContext";
import {loginHokReturn} from "../../common/types";
import { Auth } from "@aws-amplify/auth";

export const useLogin = ():loginHokReturn => {
    const context = useContext(appContxt);
    
    const loginUser = useCallback(async (user: string,passwd:string) =>{
        try{
            await Auth.signIn(user,passwd);
            const data = await Auth.currentUserInfo();
            const { attributes } = data || {};
            context.email = user;
            context.loggedIn=true;
            context.uid = attributes.sub;
        }catch(err){
            console.log(err);
            context.loggedIn=false;
        }
    },[]);
    return {loginUser};
} 

