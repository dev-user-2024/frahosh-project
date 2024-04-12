import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Box,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import dashboard from "../../assests/image/icon/category.svg";
import ticket from "../../assests/image/icon/ticket.svg";
import teacher from "../../assests/image/icon/teacher.svg";
import edit from "../../assests/image/icon/edit.svg";
import medal from "../../assests/image/icon/medal-star.svg";
import rouler from "../../assests/image/icon/ruler&pen.svg";
import book from "../../assests/image/icon/book.svg";
import timer from "../../assests/image/icon/timer.svg";
import calendar from "../../assests/image/icon/calendar-2.svg";
import tick from "../../assests/image/icon/clipboard-tick.svg";
import nitif from "../../assests/image/icon/volume-high.svg";
import info from "../../assests/image/icon/info-circle.svg";
import meeting from "../../assests/image/icon/meeting.svg";
import rollCall from "../../assests/image/icon/rollcall.svg";
import chart from "../../assests/image/icon/chart-square.svg";
import setting from "../../assests/image/icon/setting-2.svg";
import doc from "../../assests/image/icon/Document Align Center 7.svg";
import gallery from "../../assests/image/icon/gallery.svg";
import note2 from "../../assests/image/icon/note-2.svg";
import twouser from "../../assests/image/icon/profile-2user.svg";
import music from "../../assests/image/icon/musicnote.svg";

const list = [
  {
    label: "داشبورد",
    icon: dashboard,
    link: "/",
  },
  {
    label: "تیکت پشتیبانی",
    icon: ticket,
    link: "ticket",
  },
  {
    label: "آزمون ساز",
    icon: note2,
    link: "exam",
  },
  {
    label: "تصحیح آزمون",
    icon: edit,
    link: "correction",
  },
  {
    label: "آزمون",
    icon: teacher,
    link: "test",
  },
  {
    label: "تحلیل آزمون",
    icon: chart,
    link: "test-analysis",
  },
  {
    label: "مشاور",
    icon: twouser,
    link: "consultant",
  },
  {
    label: "برنامه",
    icon: tick,
    link: "scheduleconsultant",
  },
  {
    label: "نمرات",
    icon: medal,
    link: "scores",
  },
  {
    label: "جلسه",
    icon: meeting,
    link: "meeting",
  },
  // {
  //   label: "حضور و غیاب",
  //   icon: rollCall,
  //   link: "rollcall",
  // },
  // {
  //   label: "تکالیف",
  //   icon: rouler,
  //   link: "homework",
  // },
  {
    label: "کارنامه",
    icon: doc,
    link: "reportcard",
  },
  {
    label: "دفتر برنامه ریزی",
    icon: calendar,
    link: "planning",
  },
  // {
  //   label: "دفتر کلاسی",
  //   icon: book,
  //   link: "classbook",
  // },
  // {
  //   label: "موارد انضباطی",
  //   icon: timer,
  //   link: "discipline",
  // },
  // {
  //   label: "نظر سنجی",
  //   icon: tick,
  //   link: "survey",
  // },
  // {
  //   label: "برنامه مدرسه",
  //   icon: calendar,
  //   link: "schedule",
  // },
  // {
  //   label: "اطلاعیه مدرسه",
  //   icon: nitif,
  //   link: "notification",
  // },
  // {
  //   label: "درباره مدرسه",
  //   icon: info,
  //   link: "about",
  // },
  // {
  //   label: "گالری تصاویر",
  //   icon: gallery,
  //   link: "gallery",
  // },
  // {
  //   label: "موسیقی",
  //   icon: music,
  //   link: "music",
  // },
  {
    label: "تنظیمات",
    icon: setting,
    link: "setting",
  },
];

function SidebarLinks() {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  return (
    <>
      <List sx={{ mt: 2 }}>
        {list.map((i, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              display: "block",
              color: "#095385",
              "&:hover": {
                background: "#0d99ff",
                color: "#000",
              },
            }}
          >
            <Link to={i.link}>
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
                  <Box color="#fff" component="img" src={i.icon} />
                </ListItemIcon>
                <ListItemText
                  primary={i.label}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: theme.palette.mode === "dark" ? "#fff" : "#095385",
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default SidebarLinks;
