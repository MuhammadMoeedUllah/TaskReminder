import { FC } from "react";
import { Button,LoginContainer,Input } from "../../styles/commons";
 
export const RevealedFace: FC = ()=> {
     
           return( <LoginContainer darkMode={false}> 
                  <Input  darkMode={false} placeholder="Email"></Input>
                  <Input  darkMode={false} placeholder="Password"></Input>
                  <Button darkMode={false} > Login </Button> 
               </LoginContainer>);
}

