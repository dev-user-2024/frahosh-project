import { Box, Typography } from "@mui/material";
import React from "react";

const AllHomework = ({ list }) => {
  return (
    <div>
      {list.map((i, index) => (
        <Box
          my={2}
          textAlign="center"
          p={2}
          sx={{
            backgroundColor: "background.paper",
            boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
            color: "text.secondary",
          }}
          key={index}
        >
          <Typography fontWeight={600}>{i.name}</Typography>
          <Box mt={2} display="flex" alignItems="center">
            <Typography>0</Typography>
            <Box
                mx={2}
              height="40px"
              width="100%"
              borderRadius="5rem"
              sx={{
                background:
                  "linear-gradient(180deg, #ACEBCE 0%, #E9FAF2 100%)",
                  boxShadow:"-2px -2px 12px 0px rgba(17, 170, 99, 1) inset"
              }}
            ></Box>
            <Typography>100%</Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default AllHomework;
