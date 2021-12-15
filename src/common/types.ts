import * as yup from "yup";

export enum FormConstants {
  email = "email",
  password = "password",
}

export const FormSchemaYup = yup.object().shape({
  [FormConstants.email]: yup.string().required().min(4),
  [FormConstants.password]: yup.string().required().min(8),
});

export type appContext = {
    loggedIn:boolean;
    userConfirmed: boolean;
    email:string | null;
    uid:string | null;
    updateContext:React.Dispatch<React.SetStateAction<appContext>> | null;
}

export enum authTypes  {   
    login , 
    signup,
    confirmation
}

export type themeProps = {
    darkMode:boolean;
}

export type authProps = {
    headline : string;
    component:authTypes
}

export type authStateType = {
    revealLogin?: boolean,
    revealSignup?: boolean,
};
export type loginInitFacePropsType = {
    revealFace: Function;
    isRevealed:boolean;
};

export type loginHokReturn = {
    loginUser : (usrName:string, passwd:string) =>Promise<void>;
    signupUser : (usrName:string, passwd:string) =>Promise<void>;
    confirmSignup : (usrName:string, code:string) =>Promise<void>;
    isUserVerified: () =>Promise<boolean>;
}; 