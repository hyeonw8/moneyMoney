import './App.css';
import Router from './shared/Router';
import Globalstyle from './shared/Globalstyle';
import store from './redux/config/configStore';
import { Provider } from 'react-redux';

function App() {

  return (
    <>
      <Provider store={store}>
        <Globalstyle />
        <Router />
      </Provider>
    </>
  );
}

export default App;
