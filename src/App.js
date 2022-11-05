import logo from './logo.svg';
import './App.css';
import Bat from './Components/Bat';
import { Provider } from 'react-redux';
import store from './redux/store';
import Ball from './Components/Ball';
import User from './Components/User';




function App() {
  return (
    <>
      {/* provider ke store ke andr apna store daal do */}
      <Provider store={store}>
        <Bat />
        <Ball/>
        <User/>
      </Provider>
    </>
  );
}

export default App;
