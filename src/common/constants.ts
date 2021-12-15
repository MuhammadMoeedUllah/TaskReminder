import { appContext,loginStateType,loginInitFacePropsType } from "./types";
export const initialContext : appContext = {
    loggedIn: false,
    email:null,
    uid:null,
    updateContext: null,
}

export const loginState:loginStateType = {
    isLoggedin: false,
    revealFace: false,
};

export const loginInitFaceProps:loginInitFacePropsType = {
    revealFace:():void=>{}, 
    isRevealed: false,
}; 