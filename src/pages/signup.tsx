import {authTypes} from "../common/types";
import { Authentication } from "../components/Authentication";

import { FC } from "react";

export const SignupPage:FC = () => {
    return (<Authentication headline="Welcome to Signup" component={authTypes.signup}/>
        );
}; 