import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material";

export default function CheckBox(props) {
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: 5,
    width: 24,
    height: 24,
    border: "1px solid #828282",
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#1D9BF0",
    "&:before": {
      display: "block",
      width: 0,
      height: 0,
    },
  });
  return (
    <Checkbox
      disableRipple
      color="default"
      variant="solid"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
