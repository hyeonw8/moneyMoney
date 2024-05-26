import { useEffect, useState } from 'react';
import './App.css';
import Router from './shared/Router';
import moneyData from './moneyData.json';
import Globalstyle from './shared/Globalstyle';

function App() {
  const [data, setData] = useState([]);

  //console.log(data);
  useEffect(() => {
    setData(moneyData);
  }, []);

  return (
    <>
      <Globalstyle />
      <Router data={data} setData={setData} />
    </>
    
  );
}

export default App;
