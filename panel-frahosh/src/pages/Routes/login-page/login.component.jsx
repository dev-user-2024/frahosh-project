import React from "react";
import ResponsiveLogin from "../../../Components/login/login-responsive.components";
import LoginPage from "../../../Components/login/login.component";
import style from './login.module.css'



const Login = () => {
    return ( 
        <React.Fragment>
            <div className={style.firstcomponent}>
                <LoginPage/>
            </div>
            {/* <LoginPage2/> */}
            <div className={style.secondclassname}>
            <ResponsiveLogin/>
            </div>
            
        </React.Fragment>
     );
}
 
export default Login;