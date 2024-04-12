export const validate = (data, type) => {

    const errors = {};
    // if (!data.email) {
    //     errors.email = "ایمیل اجباری است"
    // } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    //     errors.email = "ایمیل معتبر نیست"
    // } else {
    //     delete errors.email
    // }

    if (!data.password) {
        errors.password = "کلمه عبور اجباری است"
    } else if (data.password.length < 6) {
        errors.password = "کلمه عبور باید بیشتر از ۶ حرف باشد"
    } else {
        delete errors.password
    }

    if (type === "signup") {
        // if (!data.name.trim()) {
        //     errors.name = "نام اجباری است"
        // } else {
        //     delete errors.name
        // }


        // if (!data.lastName.trim()) {
        //     errors.lastName = "نام خانوادگی اجباری است"
        // } else {
        //     delete errors.lastName
        // }
        if (!data.phoneNumber.trim()) {
            errors.phoneNumber = "شماره موبایل اجباری است"
        } else {
            delete errors.phoneNumber
        }

        // if (!data.nationalCode.trim()) {
        //     errors.nationalCode ="کدملی اجباری است"
        // } else if(data.nationalCode.length < 10){
        //     errors.nationalCode ="کدملی معتبر نیست"
        // }else{
        //     delete errors.nationalCode
        // }

        if (!data.confirmPassword) {
            errors.confirmPassword = "کلمه عبور را وارد کنید"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "کلمه عبور یکسان نیست"
        } else {
            delete errors.confirmPassword
        }

        // if (data.isAccepted) {
        //     delete errors.isAccepted
        // } else {
        //     errors.isAccepted = "Accept our regulations"
        // }
    }

    return errors;
}