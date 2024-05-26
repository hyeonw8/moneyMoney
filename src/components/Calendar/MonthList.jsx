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

const MonthList = ({ monthArr, setSelectedMonth, selectedMonth, activeIndex, setActiveIndex }) => {

  return (
    <>
      <StMonthList> 
        {
          monthArr.map(month => (
            <MonthButton 
            key={month}
            month={month}
            setSelectedMonth={setSelectedMonth} 
            selectedMonth={selectedMonth} 
            activeIndex={activeIndex} 
            setActiveIndex={setActiveIndex}/>
          ))
        }
      </StMonthList>
    </>
    
  )
}

export default MonthList