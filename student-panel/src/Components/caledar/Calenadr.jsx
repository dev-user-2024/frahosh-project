import React from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar, DateObject } from "react-multi-date-picker";
import { useNavigate, useParams } from "react-router-dom";

String.prototype.toEnglishDigit = function () {
  var find = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  var replace = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var replaceString = this;
  var regex;
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};
const weekDays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سهشنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];
const Calendr = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const navigateReservation = (date) => {
    navigate(`/consultant/${id}/${date}`);
  };
  const desabledTime = [
    "2023/9/4",
    " 2023/9/2",
    "2023/9/3",
    "2023/9/18",
    "2023/9/15",
  ];

  return (
    <div>
      <Calendar
        calendar={persian}
        locale={persian_fa}
        onChange={(date) => {
          navigateReservation(
            new Date(date)
          );
        }}
        // weekDays={weekDays}
        style={{ padding: "10px", boxShadow: "none" }}
        mapDays={({ date }) => {
          let y = false;
          desabledTime.map((t) => {
            let x = new Date(t);
            let d = new Date(date);
            if (
              x.getFullYear() === d.getFullYear() &&
              x.getMonth() === d.getMonth() &&
              x.getDate() === d.getDate()
            ) {
              // console.log("x" , x.getDate())
              // console.log("d" , d.getDate())
              return (y = true);
            }
          });

          if (y)
            return {
              disabled: true,
              style: {
                color: "#6C6C6C",
                background:
                  " linear-gradient(180deg, #F1A6A0 0%, #FFF2F1 100%)",
                borderRadius: "0",
                boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.08)",
              },
              onClick: () => alert("این روز قابل رزرو نیست"),
            };
          else
            return {
              style: {
                color: "#000",
                background: "#fff",
                borderRadius: "0",
                boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.08)",
              },
            };
        }}
      />
    </div>
  );
};

export default Calendr;
