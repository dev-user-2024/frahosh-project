
import "./button.styles.css";

const BUTTON_TYPE_CLASSES = {
    navigationButton: "navigation-button",
    headerSection1TextButton : "header-section-1-text-button",
    btnLoginBgBlue : "btn-login-bg-blue",
    mainSectionDownloadBtn : "main-section-3-btn",
    mobMainSectionDownloadBtn : "main-section-3-btn-mob",
    SchoolPageLogin : "school-login-btn",
    GmailBtnLogin : "gmail_login_btn",
    responsiveGmailBtnLogin : "gmail_login_btn_responsive",
    YahooBtnLogin : "yahoo_login_btn",
    responsiveYahooBtnLogin : "yahoo_login_btn_responsive",
    SignBtn : "sign_btn",
    btnbackwhite: "btn_white",
    SmarteningBtn : "smartening_btn"
}

const Button = ({ children, buttonType, ...otherProps }) => {

    return (
        <button
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>

    )
}

export default Button;