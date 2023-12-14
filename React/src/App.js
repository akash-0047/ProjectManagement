
import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard'
import ProductList from './pages/Productlist/ProductList';

function App() {
  return (
    // <div className="App">
    //     <Main></Main>
    // </div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/main" element={<Main />}>
        <Route path="/main/dashboard" element={<Dashboard />} />
        <Route path="/main/Product-list" element={<ProductList />} />
      </Route>
    </Routes>
  );
}

export default App;
