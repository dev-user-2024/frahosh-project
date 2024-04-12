import React from "react";
import { useState, useCallback, useMemo, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import "./react-big-calendar.css";
import "./react-big-calendar.css.map";
import "moment/locale/fa";
import { Box, Button } from "@mui/material";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

const PlaningCalendar = ({ component = 1 }) => {
  const [myEvents, setEvents] = useState([]);
  const [newEvents, setNewEvents] = useState({});

  //localrize calendar
  dayjs.locale("fa");
  dayjs.extend(jalaliday);
  dayjs.calendar("jalali");
  const localizer = dayjsLocalizer(dayjs);

  let messages = {
    week: "هفته",
    day: "روز",
    month: "ماه",
    previous: "قبلی",
    next: "بعدی",
    today: "امروز",
  };

  const { defaultDate, formats } = useMemo(
    () => ({
      defaultDate: new Date(2015, 3, 1),
      formats: {
        weekdayFormat: (date, culture, localizer) =>
          localizer.format(date, "dddd", culture),
      },
    }),
    []
  );

  const components = useMemo(() => {
    if (component === 2) {
      return {
        toolbar: function Toolbar(toolbarProps) {
          return (
            <div className="rollcallInfo" style={{backgroundColor:"#Eee" , marginBottom: 0 ,paddingBottom:"20px"}}>
            <div style={{display: "flex" }}>
            <p style={{ marginBottom: "0", marginLeft: "20px", cursor: "pointer",}} onClick={() => toolbarProps.onNavigate("PREV")}>
              <ArrowForwardIosOutlined />
            </p>
            <p
              style={{ marginBottom: "0", cursor: "pointer" }}
              onClick={() => toolbarProps.onNavigate("TODAY")}
            >
              {toolbarProps.label}
            </p>
            <p style={{marginBottom: "0",marginRight: "20px",cursor: "pointer",}} onClick={() => toolbarProps.onNavigate("NEXT")}>
              <ArrowBackIosNewOutlined />
            </p>
            </div>
            <div style={{display: "flex", justifyContent:"space-between" , width:"200px" }}>
            <div style={{display: "flex" }}>
            <div className="Present-box"></div>
            <small>حاضر</small>
            </div>
            <div style={{display: "flex"}}>
            <div className="Absent-box"></div>
            <small>غایب</small>
            </div>
            </div>
          </div>
          );
        },
        month: {
          header: (props) => {
            return (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                color='#1D9BF0'
                height={60}
                fontWeight={800}
                fontSize='medium'
              >
                {props.label}
              </Box>
            );
          },
        },
      };
    } else {
      return {
        toolbar: function Toolbar(toolbarProps) {
          return (
            <div className="rollcallInfo" style={{backgroundColor:"#Eee" , marginBottom: 0 ,paddingBottom:"20px"}}>
            <div style={{display: "flex" }}>
            <p style={{ marginBottom: "0", marginLeft: "20px", cursor: "pointer",}} onClick={() => toolbarProps.onNavigate("PREV")}>
              <ArrowForwardIosOutlined />
            </p>
            <p
              style={{ marginBottom: "0", cursor: "pointer" }}
              onClick={() => toolbarProps.onNavigate("TODAY")}
            >
              {toolbarProps.label}
            </p>
            <p style={{marginBottom: "0",marginRight: "20px",cursor: "pointer",}} onClick={() => toolbarProps.onNavigate("NEXT")}>
              <ArrowBackIosNewOutlined />
            </p>
            </div>
          </div>
          );
        },
        month: {
          header: (props) => {
            return (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                color='#1D9BF0'
                height={60}
                fontWeight={800}
                fontSize='medium'
              >
                {props.label}
              </Box>
            );
          },
        },
      };
    }
  }, [component]);

  return (
    <div>
      <div className="calender-box">
        <Calendar
          components={components}
          className="calendar"
          localizer={localizer}
          formats={formats}
          //   events={myEvents}
          startAccessor="start"
          endAccessor="end"
          views={["month"]}
          defaultView="month"
          selectable
          rtl={true}
          messages={messages}
          // onSelectEvent={handleSelectEvent}
          onSelectSlot={(e) => {
            console.log(e);
          }}
        />
      </div>
    </div>
  );
};

export default PlaningCalendar;
