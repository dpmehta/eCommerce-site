import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <>
      {/* <Products /> */}
      <Provider store={store}>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
