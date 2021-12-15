export type appContext = {
    loggedIn:boolean;
    email:string | null;
    uid:string | null;
    updateContext:React.Dispatch<React.SetStateAction<appContext>> | null;
}

export enum authTypes  {   
    login , 
    signup
}

export type themeProps = {
    darkMode:boolean;
}

export type authProps = {
    headline : string;
    component:authTypes
}

export type loginStateType = {
    isLoggedin: boolean;
    revealFace: boolean;
};
export type loginInitFacePropsType = {
    revealFace: Function;
    isRevealed:boolean;
};

export type loginHokReturn = {
    loginUser : (usrName:string, passwd:string) =>Promise<void>;
}; 