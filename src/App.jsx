
import './App.css';
import Router from './shared/Router';
import Globalstyle from './shared/Globalstyle';
import { DataProvider } from './context/DataContext';

function App() {
  
  return (
    <>
      <DataProvider>
        <Globalstyle />
        <Router />
      </DataProvider>
    </>
    
  );
}

export default App;
