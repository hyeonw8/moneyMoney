import styled from "styled-components"
import MonthButton from "./MonthButton"

const StMonthList = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #fff;
  border-radius: 20px;
  margin: 0 15px 10px 15px;
`

const MonthList = () => {
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

  return (
    <>
      <StMonthList> 
        {
          monthArr.map(month => (
            <MonthButton 
            key={month}
            month={month}
            />
          ))
        }
      </StMonthList>
    </>
    
  )
}

export default MonthList