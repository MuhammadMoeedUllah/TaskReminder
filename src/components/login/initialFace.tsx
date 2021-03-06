import { FC } from "react";
import {loginInitFacePropsType} from "../../common/types";
import { Button,LoginContainer } from "../../styles/commons";
 
export const LoginFace: FC<loginInitFacePropsType> = ({revealFace})=> {
     
           return( <LoginContainer darkMode={false}> 
                     <Button darkMode={false} onClick= {()=>{revealFace();}}> Login </Button> 
               </LoginContainer>);
}

