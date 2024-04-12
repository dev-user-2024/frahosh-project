import React from "react";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Share } from "../../assests/icons/share.svg";
import styles from "./copyurl.module.css";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const useMobileDevice = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    setIsMobileOrTablet(isMobileOrTabletDevice());
  });

  return [isMobileOrTablet];
};
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Copyurl() {
  const [copySuccess, setCopySuccess] = useState(false);

  async function copyToClip() {
    await navigator.clipboard.writeText(location.href);
    setOpen(true);
  }
  const [open, setOpen] = React.useState(false);



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleOnClick = () => {
    if (navigator.share) {
      navigator
        .share({
          // title: "`${postTitle} | ${siteTitle}`",
          // text: `Check out ${postTitle} on ${siteTitle}`,
          url: document.location.href,
        })
        .then(() => {
          console.log('Successfully shared');
        })
        .catch(error => {
          console.error('Something went wrong sharing the blog', error);
        });
    }
  };
  return (
    <>
      <div className={`${styles.background} ${styles.share}`}><Share onClick={handleOnClick} /></div>
      <div className={`${styles.background} ${styles.copy}`}><Share onClick={copyToClip} /></div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center',}}>
        <Alert
          onClose={handleClose}
          severity="success"
          color="info"
          sx={{ width: "100%" }}
        >
          آدرس گالری با موفقیت کپی شد 🙂
        </Alert>
      </Snackbar>
    </>
  );
}

export default Copyurl;
