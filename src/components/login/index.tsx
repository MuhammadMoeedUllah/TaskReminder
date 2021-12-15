import { FC, Fragment } from "react";
import {loginInitFacePropsType} from "../../common/types";
import {LoginFace} from "./initialFace";
import { RevealedFace } from "./revealeddFace";

export const Login: FC<loginInitFacePropsType> = (props :loginInitFacePropsType )=>{
        const {isRevealed }= props; 
        return (<Fragment> {isRevealed ? <RevealedFace/>  : <LoginFace {...props} />   }</Fragment>);
    }