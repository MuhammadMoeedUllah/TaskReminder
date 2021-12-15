import { FC, useState } from "react";
import { Button,LoginContainer,Input } from "../styles/commons";
 import {useLogin} from "../hooks/Authenticator/useAuth";
interface Props{
    name:string
}
export const RevealedFace: FC<Props> = ({name})=> {

   const {confirmSignup, isUserVerified} = useLogin();
    const [code, setCode] =useState("");

   return( <LoginContainer darkMode={false}> 

         <Input  darkMode={false} onChange={(e)=>{console.log("code : ",e);}}></Input>
         <Button darkMode={false} onClick= {()=>{confirmSignup("moeed",code)}}> Signup </Button> 
      </LoginContainer>);
}

