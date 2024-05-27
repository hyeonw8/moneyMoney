import MoneyForm from '../components/MoneyForm';
import MoneyList from './MoneyList';
import styled from 'styled-components';
import MonthList from './Calendar/MonthList';
import { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

const StWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 1200px;
  min-width: 780px;
  margin: 0 auto;
  padding: 10px;
`;

const MoneyContainer = () => {
  const { data, selectedMonth, setFilteredData } = useContext(DataContext);
  const monthArr = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

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
      <MoneyForm filterData={filterData} />
      <MonthList monthArr={monthArr} />
      <MoneyList />
    </StWrapper>
  );
};

export default MoneyContainer;
