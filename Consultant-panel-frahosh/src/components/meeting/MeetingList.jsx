import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";

const MeetingList = () => {
  const theme = useTheme();

  return (
    <Box mt={3}>
      <Typography
        sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
        textAlign="left"
        fontWeight={600}
        mb={1}
      >
        جلسات برگزار شده
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ background: "none", boxShadow: "none" }}
      >
        <Table
          sx={{
            minWidth: 650,
            borderCollapse: "separate",
            borderSpacing: "0 0.6rem",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                تاریخ جلسه
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                تشکیل دهندگان
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                شرکت کنندگان
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                عنوان جلسه
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                مدت زمان
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{
                "& th:last-child": {
                  borderTopRightRadius: "16px",
                  borderBottomRightRadius: "16px",
                  marginTop: "10px",
                },
                "& th:first-child": {
                  borderTopLeftRadius: "16px",
                  borderBottomLeftRadius: "16px",
                  marginTop: "10px",
                },
                "& > *": { borderBottom: "unset", marginTop: "10px" },
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.grey.light
                    : "#FFFFFF",
                marginTop: "10px",
              }}
            >
              <TableCell>22/3/1402</TableCell>
              <TableCell>مدیر مدرسه</TableCell>
              <TableCell>کلاس 102</TableCell>
              <TableCell>جشن</TableCell>
              <TableCell>1:45</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MeetingList;
