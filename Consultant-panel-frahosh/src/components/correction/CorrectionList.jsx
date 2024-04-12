import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
const CorrectionList = () => {
    const theme = useTheme();
  return (
    <Box mt={3}>
      <Typography
        sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000", fontFamily: "Rokh-Bold", fontSize: "19px" }}
        textAlign="left"
        fontWeight={600}
        mb={1}
        variant='h5' component="p"
      >
        لیست آزمون ها
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
                ردیف
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                عنوان آزمون
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                کد آزمون
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                مقطع
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                پایه
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                شماره کلاس
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                زمان برگزاری
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                نوع آزمون
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                تعداد سوال
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              >
                وضعیت
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
              ></TableCell>
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
                boxShadow:" 3px 3px 30px 0px rgba(0, 0, 0, 0.08)"
              }}
            >
              <TableCell>1</TableCell>
              <TableCell>آزمون شماره 1</TableCell>
              <TableCell>2514</TableCell>
              <TableCell>ابتدایی</TableCell>
              <TableCell>سوم</TableCell>
              <TableCell>3</TableCell>
              <TableCell>2/5/1402</TableCell>
              <TableCell>تستی</TableCell>
              <TableCell>10</TableCell>
              <TableCell               
                sx={{
                  color: theme.palette.mode === "dark" ? "#11AA63" : "#11AA63",
                }}
                >تصیحیح شده</TableCell>
              <TableCell>
                <Link to="2">
                  <ArrowBack
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "000",
                    }}
                  />
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CorrectionList;