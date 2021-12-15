import { appContext,authStateType,loginInitFacePropsType } from "./types";
export const initialContext : appContext = {
    loggedIn: false,
    userConfirmed: false,
    email:null,
    uid:null,
    updateContext: null,
}

export const authButtonState:authStateType = {
    revealLogin: false,
    revealSignup: false,
};

export const loginInitFaceProps:loginInitFacePropsType = {
    revealFace:():void=>{}, 
    isRevealed: false,
}; 

export const signUpInitFaceProps:loginInitFacePropsType = {
    revealFace:():void=>{}, 
    isRevealed: false,
}; 