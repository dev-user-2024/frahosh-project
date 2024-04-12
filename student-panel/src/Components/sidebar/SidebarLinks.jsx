import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Box,
  ListItemText,
  Drawer,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Clipboard,
  Teacher,
  Calender,
  Category,
  Profileuser,
  Chart,
  Setting,
  Microphon,
  Math,
  Ticket,
  Glass,
  Archivebook,
  Task,
  Video
} from "../../assests/image/svg";
import { ReactComponent as Dot } from "../../assests/icons/dot.svg"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Typography from '@mui/material/Typography';
import React from "react";
import { useTheme } from "@mui/material";

function SidebarLinks() {
  const [open, setOpen] = useState(true);
  const [openList, setOpenList] = useState(false);
  const [openList2, setOpenList2] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setOpenList(!openList);
  };
  const handleClick2 = () => {
    setOpenList2(!openList2);
  };
  const listSvg = [
    Clipboard,
    Teacher,
    Calender,
    Category,
    Profileuser,
    Chart,
    Setting,
    Microphon,
    Math,
    Ticket,
    Glass,
    Archivebook,
    Task,
    Video
  ];
  return (
    <>
    <List sx={{ mt: 2 }}>
      <ListItem
        key="sdfg"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[3]} />
            </ListItemIcon>
            <ListItemText primary="داشبورد" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        key="ticket"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/tickets">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[9]} />
            </ListItemIcon>
            <ListItemText primary="تیکت پشتیبانی" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        key="School"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <ListItemButton
          onClick={handleClick}
          sx={{
            minHeight: 40,
            pl: 3,
            justifyContent: open ? "initial" : "center",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              width: 18,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <Box component="img" src={listSvg[1]} />
          </ListItemIcon>
          <ListItemText primary="مدرسه من" sx={{ opacity: open ? 1 : 0 }} />
          {openList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/testlist">
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText primary="آزمون" />
            </ListItemButton>
          </Link>
          <List component="div" disablePadding>
            <Link to="/score">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="نمرات" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/sessions">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="جلسه" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/rollcall">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                 <Dot />
                </ListItemIcon>
                <ListItemText primary="حضور و غیاب" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/homework">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="تکالیف" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/handout">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="جزوه" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/gallerylist">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="گالری عکس ها" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/sounds">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="موسیقی" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/classbook">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="دفتر کلاسی" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/disipline">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="موارد انظباطی" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/reportcard">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="کارنامه" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/schedule">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="برنامه مدرسه" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/tuition">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="شهریه" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/survey">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="نظرسنجی" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/notifications">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="اطلاعیه مدرسه" />
              </ListItemButton>
            </Link>
          </List>
          <List component="div" disablePadding>
          <Link to="/about-us">
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon sx={{ pl: 5 }}>
              <Dot />
              </ListItemIcon>
              <ListItemText primary="درباره مدرسه" />
            </ListItemButton>
          </Link>
        </List>
          <List component="div" disablePadding>
            <Link to="/massenger">
              <ListItemButton sx={{ pl: 1 }}>
                <ListItemIcon sx={{ pl: 5 }}>
                <Dot />
                </ListItemIcon>
                <ListItemText primary="پیامرسان" />
              </ListItemButton>
            </Link>
          </List>
        </List>
      </Collapse>
      <ListItem
        key="planning"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/scheduleconsultant">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[0]} />
            </ListItemIcon>
            <ListItemText primary="برنامه" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        key="exam"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/testanalysis">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[5]} />
            </ListItemIcon>
            <ListItemText
              primary="تحلیل آزمون"
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        key="planningNote"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/planning">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[2]} />
            </ListItemIcon>
            <ListItemText
              primary="دفتر برنامه‌ریزی"
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        key="adviser"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/consultant">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[4]} />
            </ListItemIcon>
            <ListItemText primary="مشاور" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        key="math"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/solving">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[8]} />
            </ListItemIcon>
            <ListItemText primary="حل سوال درسی" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        key="labratory"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/labratory">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[10]} />
            </ListItemIcon>
            <ListItemText primary="آزمایشگاه" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        key="banktest"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/banktest">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[11]} />
            </ListItemIcon>
            <ListItemText primary="بانک تست" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        key="teststart"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/testlist">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[12]} />
            </ListItemIcon>
            <ListItemText primary="آزمون" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        key="video"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/video">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[13]} />
            </ListItemIcon>
            <ListItemText primary="فیلم آموزشی" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem
        key="tools"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <ListItemButton
          onClick={handleClick2}
          sx={{
            minHeight: 40,
            pl: 3,
            justifyContent: open ? "initial" : "center",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              width: 18,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <Box component="img" src={listSvg[3]} />
          </ListItemIcon>
          <ListItemText primary="ابزارک ها" sx={{ opacity: open ? 1 : 0 }} />
          {openList2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={openList2} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
          <Link to="/tools/calculator">
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon sx={{ pl: 5 }}>
              <Dot />
              </ListItemIcon>
              <ListItemText primary="ماشین حساب" />
            </ListItemButton>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link to="/tools/percentage">
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon sx={{ pl: 5 }}>
              <Dot />
              </ListItemIcon>
              <ListItemText primary="درصد گیری" />
            </ListItemButton>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link to="/tools/lightner">
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon sx={{ pl: 5 }}>
              <Dot />
              </ListItemIcon>
              <ListItemText primary="لایتنر" />
            </ListItemButton>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link to="/tools/moshtagh">
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon sx={{ pl: 5 }}>
              <Dot />
              </ListItemIcon>
              <ListItemText primary="مشتق گیری" />
            </ListItemButton>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link to="/tools/matrix">
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon sx={{ pl: 5 }}>
              <Dot />
              </ListItemIcon>
              <ListItemText primary="محاسبه ماتریس" />
            </ListItemButton>
          </Link>
        </List>
        <List component="div" disablePadding>

          <Link to="/tools/timer">
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon sx={{ pl: 5 }}>
              <Dot />
              </ListItemIcon>
              <ListItemText primary="تایمر" />
            </ListItemButton>
          </Link>
        </List>
        <List component="div" disablePadding>
          <Link to="/tools/countdown">
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon sx={{ pl: 5 }}>
              <Dot />
              </ListItemIcon>
              <ListItemText primary="تا کنکور" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>

      <ListItem
        key="podcast"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/podcast">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[7]} />
            </ListItemIcon>
            <ListItemText primary="پادکست" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem
        key="setting"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#0d99ff",
          },
        }}
      >
        <Link to="/setting">
          <ListItemButton
            sx={{
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={listSvg[6]} />
            </ListItemIcon>
            <ListItemText primary="تنظیمات" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>
    </List>

    </>
  );
}
export default SidebarLinks;
