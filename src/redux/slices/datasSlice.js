import { createSlice } from "@reduxjs/toolkit"
import moneyData from '/src/moneyData.json';

// const savedMonth = JSON.parse(localStorage.getItem('month')) || [];
const getSelectedMonth = () => {
  return JSON.parse(localStorage.getItem('month')) || []
}
// const getActiveIndex = () => {
//   return savedMonth.length === 0 ? null : savedMonth;
// }

const initialState = {
  data: moneyData,
  selectedMonth: getSelectedMonth(),
  // filteredData: [],
}

const datasSlice = createSlice({
  name: 'datas',
  initialState,
  reducers: {
    // setData: (state, action) => {
    //   state.data = action.payload;
    // },
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
      localStorage.setItem('month', JSON.stringify(action.payload));
    },
    // setFilteredData: (state, action) => {
    //   state.filteredData = action.payload;
    // },
    addData: (state, action) => {
      // 받아오는 거 새로운 데이터(지출 내역)
      state.data.push(action.payload);
    },
    deleteData: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter(item => item.id !== id);
    },
    updateData: (state, action) => {
      const { id, updatedItem } = action.payload;
      state.data = state.data.map((item) => (item.id === id ? updatedItem : item))
    }
  }
})

export const { setSelectedMonth, addData, deleteData, updateData } = datasSlice.actions;
export default datasSlice.reducer;