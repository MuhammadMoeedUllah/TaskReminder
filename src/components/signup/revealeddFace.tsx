import { FC, useEffect } from "react";
import { Button,LoginContainer,Input } from "../../styles/commons";
 import {useLogin} from "../../hooks/Authenticator/useAuth";
 import {FormConstants, FormSchemaYup} from "../../common/types";
 import { useForm } from "react-hook-form";
 import { yupResolver } from "@hookform/resolvers/yup";


export const RevealedFace: FC = ()=> {

   const {signupUser} = useLogin();
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(FormSchemaYup), mode: "onChange" });
    useEffect (()=>{
      if(errors)
      console.log("ERROR: ", errors[FormConstants.email]?.message || errors[FormConstants.password]?.message);
    },[errors]);
   return( <LoginContainer darkMode={false}> 
         <form onSubmit={handleSubmit((d) => signupUser(d[FormConstants.email],d[FormConstants.password]))}>

         <Input  darkMode={false} {...register(FormConstants.email)}></Input>
         <Input  darkMode={false} {...register(FormConstants.password)}></Input>
         <Button darkMode={false} > Signup </Button> 
         </form>
      </LoginContainer>);
}

