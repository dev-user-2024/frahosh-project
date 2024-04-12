import { useState } from "react";
import styles from "./tuition.module.css";
import { ReactComponent as Play } from "../../../assests/image/svg/play.svg";
import Sarbolandan from "../../../assests/image/sarbedaran.png";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 230 },
  { name: 'Group B', value: 180 },
  { name: 'Group C', value: 700 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28',];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.right}>
          <div className={styles.box}>
            <p>مجموع مبالغ پرداخت شده: 3200000 تومان</p>
            <p>مانده بدهی: 1800000 تومان</p>
          </div>
        </div>
        <div className={styles.left}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={40} height={20}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.bloc_tabs}>
        <button
          className={
            toggleState === 1
              ? `${styles["tabs"]} ${styles.active_tabs}`
              : styles.tabs
          }
          onClick={() => toggleTab(1)}
        >
          اقساط سررسید شده
        </button>
        <button
          className={
            toggleState === 2
              ? `${styles["tabs"]} ${styles.active_tabs}`
              : styles.tabs
          }
          onClick={() => toggleTab(2)}
        >
          اقساط پرداخت نشده
        </button>
        <button
          className={
            toggleState === 3
              ? `${styles["tabs"]} ${styles.active_tabs}`
              : styles.tabs
          }
          onClick={() => toggleTab(3)}
        >
          اقساط پرداخت شده
        </button>
      </div>

      <div className={styles.content_tabs}>
        <div
          className={
            toggleState === 1
              ? `${styles["content"]} ${styles.active_content}`
              : styles.content
          }
        >
          <p>تعداد اقساط سررسید شده: 3</p>
          <div className={styles.listcontainer}>
            <p>25 مرداد 1401</p>
            <p>200000 تومان</p>
            <Link className={styles.link}>
              <div className={styles.paybutton}>
                پرداخت قسط
                <ArrowBackIosNewIcon className={styles.arrow} />
              </div>
            </Link>
          </div>
        </div>

        <div
          className={
            toggleState === 2
              ? `${styles["content"]} ${styles.active_content}`
              : styles.content
          }
        ></div>
        <div
          className={
            toggleState === 3
              ? `${styles["content"]} ${styles.active_content}`
              : styles.content
          }
        ></div>
      </div>
    </div>
  );
}

export default Tabs;
