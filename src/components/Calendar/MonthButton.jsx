import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../context/DataContext';

const StButton = styled.button`
  height: 65px;
  flex-basis: 13%;
  font-size: 20px;
  border-radius: 20px;
  border: none !important;
  background-color: ${(props) => (props.$active ? 'lightblue' : '#e2e2e2;')};
  &:hover {
    background-color: darkgray;
  }
  font-family: 'Pretendard', sans-serif;
  font-weight: 900;
`;

const MonthButton = ({ month }) => {
  const { setSelectedMonth, selectedMonth, activeIndex, setActiveIndex } =
    useContext(DataContext);
  const onClickHandler = (month) => {
    //const filteredData = [...data].filter((item) => item.date ===  );
    setActiveIndex(month);
    //console.log(filteredData);
    setSelectedMonth(month);
  };

  // 선택 월 로컬 스토리지 저장
  useEffect(() => {
    if (selectedMonth !== null) {
      localStorage.setItem('month', JSON.stringify(selectedMonth));
    }
  }, [selectedMonth]);

  return (
    <>
      <StButton
        $active={activeIndex === Number(month)}
        onClick={() => onClickHandler(Number(month))}
      >
        {month}월
      </StButton>
    </>
  );
};

export default MonthButton;
