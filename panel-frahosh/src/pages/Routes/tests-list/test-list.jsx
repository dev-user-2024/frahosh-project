import React from 'react';
import Testlist1 from '../../../Components/test-list/test-list';
import Testlist2 from '../../../Components/test-list/TestList2';
import styles from './test-list.module.css';
import { serverApi , token } from '../../../confing/confing';
import { useEffect, useState } from 'react';
import axios from 'axios';

 function Testlist() {

  const [list1,setList1] = useState([])
  const [list2,setList2] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data : list1} = await axios.get(`${serverApi}done_exams`, { headers: { authorization: `Bearer ${token}` }});
        // console.log(list1)
        setList1(list1)
        const { data : list2} = await axios.get(`${serverApi}not_done_exams` , { headers: { authorization: `Bearer ${token}` }});
        // console.log(list2)
        setList2(list2)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
    <h3 className={styles.title}>آزمون های انجام نشده</h3>
    <Testlist1 list={list1} />
    <h3 className={styles.title}>آزمون های انجام شده</h3>
    <Testlist2 list={list2}/>
  </div>
  )
}
export default Testlist;
