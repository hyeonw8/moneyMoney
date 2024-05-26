import MoneyForm from '../components/MoneyForm';
import MoneyList from './MoneyList';
import styled from 'styled-components';
import MonthList from './Calendar/MonthList';
import { useEffect, useState } from 'react';

const StWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 1200px;
  min-width: 780px;
  margin: 0 auto;
  padding: 10px;
`;

const MoneyContainer = ({ data, setData }) => {
  const monthArr = ['1','2','3','4','5','6','7','8','9','10','11','12',];
  const savedMonth = JSON.parse(localStorage.getItem('month')) || [];

  const [selectedMonth, setSelectedMonth] = useState(savedMonth);
  const [activeIndex, setActiveIndex] = useState(
    savedMonth.length === 0 ? null : savedMonth
  );

  // const filteredData = [...data].filter((fdata) => {
  //   const spliceMonth = fdata.date.slice(5, 7).replace('0', '');
  //   //console.log('>>> spliceMonth',Number(spliceMonth));
  //   //console.log('>>>selectedMonth', selectedMonth)
  //   return Number(spliceMonth) === selectedMonth; 
  // });
  // //const [filteredData, setfFilteredData] = useState(filterData);
  
  // const addData = (newData) => {
  //   const updatedData = [...data, newData];
  //   setData(updatedData);
  //   setFilteredData(filterData(updatedData, selectedMonth));
  // };
  
  // useEffect(() => {
  //   console.log(filteredData);
  // }, [filteredData]);

  const [filteredData, setFilteredData] = useState([]);

  const filterData = (data, selectedMonth) => {
    return data.filter((fdata) => {
      const spliceMonth = fdata.date.slice(5, 7);
      return Number(spliceMonth) === selectedMonth;
    });
  };

  useEffect(() => {
    setFilteredData(filterData(data, selectedMonth));
  }, [data, selectedMonth]);

  return (
    <StWrapper>
      <MoneyForm 
        data={data} 
        setData={setData} 
        setFilteredData={setFilteredData} 
        selectedMonth={selectedMonth} 
        filterData={filterData}
      />
      <MonthList
        monthArr={monthArr}
        setSelectedMonth={setSelectedMonth}
        selectedMonth={selectedMonth}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <MoneyList data={data} setData={setData} filteredData={filteredData} />
    </StWrapper>
  );
};

export default MoneyContainer;
