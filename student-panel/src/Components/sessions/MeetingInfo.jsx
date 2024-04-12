import React from 'react';
import { Box, Typography, Button } from "@mui/material";
const MeetingInfo = () => {
    return (
        <div>
        <Box mt={2}>
        <Typography variant="h6" fontWeight={700} color="text.primary" mb={1}>
          اطلاعات جلسه
        </Typography>
        <Box
          sx={{
            backgroundColor: "background.paper",
            boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
            color: "text.secondary",
          }}
          p={{ xs: 2, md: 4 }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography>تاریخ : 2مهر 1402</Typography>
            <Typography>ساعت : 9 صبح</Typography>
          </Box>
          <Box mt={5} display="flex" justifyContent="space-between">
            <Typography>
              برگزارکننده: مدیر مدرسه-آقای نیازی و مشاور مدرسه-آقای حسینی
            </Typography>
            <Typography>موضوع: المپیاد ریاضی سال 1401</Typography>
          </Box>
        </Box>

        <Box mt={4} display="flex" justifyContent="center">
          <Button variant="contained" sx={{ width: "250px" }} disabled>
            ورود به جلسه
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" >
          <Typography
            variant="caption"
            mt={2}
            color="text.secondary"
            textAlign="center"
          >
            * لینک ورود به جلسه در زمان مشخص شده فعال می‌گردد.
          </Typography>
        </Box>
      </Box>
        </div>
    );
};

export default MeetingInfo;