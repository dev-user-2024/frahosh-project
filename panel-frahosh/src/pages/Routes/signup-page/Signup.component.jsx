import React from "react";
import SignOutPage2 from "../../../Components/signup/signup2.component";
import axios from "axios";

const Signup =  () => {
    

        //   var bodyFormData = new FormData();
        //   bodyFormData.append('mobile', '09029227244');
        //   bodyFormData.append('password', '123456');

        // axios({
        //     method: "post",
        //     url: "https://support.frahosh.com/api/v1/user-auth/user-login",
        //     withCredentials: false,
        //     data: bodyFormData,
        //     headers: { "Content-Type": "multipart/form-data",

        // },
        //   })
        //     .then(function (response) {
        //       //handle success
        //       console.log(response);
        //     })
        //     .catch(function (response) {
        //       //handle error
        //       console.log(response);
        //     });
    return ( 
        <React.Fragment>
            
            {/* <SignOutPage/> */}
            <SignOutPage2/>
        </React.Fragment>
     );
}

export default Signup;