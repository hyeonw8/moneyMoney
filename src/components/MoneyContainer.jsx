import MoneyForm from '../components/MoneyForm';
import MoneyList from './MoneyList';
import styled from 'styled-components';
import MonthList from './Calendar/MonthList';
import { useEffect } from 'react';
//import { DataContext } from '../context/DataContext';
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredData } from '../redux/slices/datasSlice';

const StWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 1200px;
  min-width: 780px;
  margin: 0 auto;
  padding: 10px;
`;

const MoneyContainer = () => {
  //const { data, selectedMonth, setFilteredData } = useContext(DataContext);
  //const data = useSelector((state) => state.datas.data);
  //const selectedMonth = useSelector((state) => state.datas.selectedMonth);
  //const dispatch = useDispatch();
  //console.log(data)
  //console.log(selectedMonth)

  

  // const filterData = (data, selectedMonth) => {
  //   return data.filter((fdata) => {
  //     const spliceMonth = fdata.date.slice(5, 7);
  //     return Number(spliceMonth) === selectedMonth;
  //   });
  // };

  // useEffect(() => {
  //   dispatch(setFilteredData(filterData(data, selectedMonth)));
  // }, [data, selectedMonth]);

  return (
    <StWrapper>
      <MoneyForm />
      <MonthList />
      <MoneyList />
    </StWrapper>
  );
};

export default MoneyContainer;
