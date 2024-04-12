import React from "react";
import ResponsiveLogin from "../../components/login/login-responsive.components";
import LoginPage from "../../components/login/login.component";
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