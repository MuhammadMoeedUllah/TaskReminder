import {authTypes} from "../common/types";
import { Authentication } from "../components/Authentication";

import { FC } from "react";

export const LoginPage:FC = () => {
    return (<Authentication headline="Welcome to Login" component={authTypes.login}/>
        );
}; 