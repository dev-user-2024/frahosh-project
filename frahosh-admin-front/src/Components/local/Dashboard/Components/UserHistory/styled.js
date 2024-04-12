import { Grid, styled } from "@mui/material";

export const HistoryCard = styled(Grid)(({ theme }) => ({
    "& > div > div": {
        height: 287,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "30px 10px 0 10px",
        background: '#FFF',
        color: "#095385",
        borderRadius: 10,
        "& > div > svg": {
            width: 48,
            height: 48,
            margin: "20px 0",
        },
        "& > div > h4": {
            fontSize: 20,
            fontWeight: 600,
        },
        "& > div": {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            "& > p": {
                fontSize: 30,
                fontWeight: 500,
                margin: "20px 0",
            },
            "& > div": {
                marginLeft: 2,
                width: '100%',
                "& div": {
                    padding: 4,
                }
            },
            "& > div > div:nth-child(1)": {
                background: '#E3EFF8',
                "& p": {
                    fontWeight: 500,
                }
            },
        },

    }
}))