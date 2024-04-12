import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Button from "../../buttons/button.component";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { top100Films } from "./serchlist";
import styles from "./search.style.module.css";
import { useTheme } from "@mui/material";
import {InputAdornment} from "@mui/material";

function FreeSolo() {
  const theme = useTheme();

  return (
    <Stack spacing={2} sx={{ width: { md: "762px", xs: "80%" } }}>
      <Autocomplete
        sx={{
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
        }}
        id="document_list"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            dir="rtl"
            InputProps={{
              startAdornment: <InputAdornment position="start">عنوان یا موضوع مقاله مورد نظر را بنویسید...</InputAdornment>,
            }}
          />
        )}
      />
    </Stack>
  );
}

// Create rtl cache


export default function DocumentSearch() {
  return (
        <div dir="rtl" className={styles.sec}>
          <div className={styles.bg_search} dir="rtl">
            <FreeSolo />
            <Button>جست‌و‌جو</Button>
          </div>
        </div>
  );
}
