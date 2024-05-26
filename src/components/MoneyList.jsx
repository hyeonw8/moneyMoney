import styled from 'styled-components';
import MoneyItem from './MoneyItem';
import { useContext } from 'react';
import { DataContext } from '../shared/DataContext';

const StMoneyList = styled.div`
  height: 100%;
  background-color: #fff;
  margin: 30px 15px 10px 15px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`;
const StNotMoneyList = styled.div`
  height: 100%;
  background-color: #fff;
  margin: 30px 15px 10px 15px;
  border-radius: 20px;  
  padding: 20px;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  font-weight: 500;
`

const MoneyList = () => {
  const { filteredData } = useContext(DataContext);

  if (filteredData.length === 0) {
    return (
      <StNotMoneyList>
        <h2>해당 월에는 지출 내역이 없습니다!</h2>
        <p>지출 내역이 있다면 추가해주세요 📝</p>
      </StNotMoneyList>
    );
  }

  return (
    <StMoneyList>
      {filteredData.map((data) => (
        <MoneyItem key={data.id} data={data} />
      ))}
    </StMoneyList>
  );
};

export default MoneyList;
