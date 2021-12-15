import { useContext } from "react";
import {appContxt} from "../../common/appContext";
import {loginHokReturn} from "../../common/types";
import { Auth } from "@aws-amplify/auth";

export const useLogin = ():loginHokReturn => {
    const context = useContext(appContxt);
    
    const loginUser = async (user: string,passwd:string):Promise<void> =>{
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
            context.userConfirmed=false;
        }
    };
    const signupUser = 
        async (email:string, password:string): Promise<void> => {
          try {
            const response = await Auth.signUp({
              username: email,
              password,
              attributes: {
                email:"temp@temp.com",
              },
            });
            console.log("response : ", response);
            context.email = email;
            context.loggedIn=true;
            context.uid = response.userSub;
          } catch (err) {
            console.log(err);
            context.loggedIn=false;
            }
        }
    const isUserVerified = async() =>{
      try{
        const data = await Auth.currentUserInfo();
        const { attributes } = data || {};
        if(attributes?.email_verified === true){
          console.log(attributes);
          context.userConfirmed=true;
          context.email= attributes.username;
          console.log("verified");
          return true;
        }
        console.log("not  verified");
        return false;
      }
      catch(err){
        console.log(err);
        return false;
      }    
    }
    const confirmSignup = async(name:string, code:string) =>{
      try{
          await Auth.confirmSignUp(name,code);        
        }
      catch (err){
        console.log(err);
      }
    }
    return {loginUser,signupUser,isUserVerified,confirmSignup};
} 

