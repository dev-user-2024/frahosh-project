import { styled } from "@mui/material"
import MuiSelect from "@mui/material/Select"

export const Select = styled(MuiSelect)(({ theme }) => ({
    height: 47,
    borderRadius: "10px !important",
    background: "#FFF",

    '& .MuiSelect-icon': {
        left: 5,
        right: 'unset',
    },
    '& .MuiSelect-select': {
        textAlign: 'right',
        padding: '7px 0 6px 35px',
        width: 100,
        fontSize: 14,
    },

}))