import React from "react";
import { Paper } from "@mui/material";
import { Fragment } from "react";
import TitleTypography from "./title";

export default function SchoolLocation(props) {
  const { schoolLocation } = props;
  return (
    <Fragment>
      <TitleTypography variant="h5">موقعیت روی نقشه</TitleTypography>
      <Paper sx={{ height: 200 }}>
        <iframe
        title="location"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d103667.44237010532!2d51.4598975!3d35.7112734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0121c0000001%3A0x9809a5a417928ab4!2z2YXZiNiy2Ycg2YfZhtix2YfYp9uMINmF2LnYp9i12LEg2KrZh9ix2KfZhg!5e0!3m2!1sfa!2s!4v1684785678095!5m2!1sfa!2s"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Paper>
    </Fragment>
  );
}
