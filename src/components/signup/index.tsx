import { FC, Fragment } from "react";
import {loginInitFacePropsType} from "../../common/types";
import {SignupFace} from "./initialFace";
import { RevealedFace } from "./revealeddFace";

export const Signup: FC<loginInitFacePropsType> = (props :loginInitFacePropsType )=>{
        const {isRevealed }= props; 
        return (<Fragment> {isRevealed ? <RevealedFace/>  : <SignupFace {...props} />   }</Fragment>);
}