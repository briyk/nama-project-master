import './index.css'
import  {Main}  from './components'
import PartnersPage from './pages/PartnersPage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import QualityPage from './pages/QualityPage'
import Join from './pages/Join'
import Cart from './pages/Cart'
import Discounts from './pages/Discounts'
import Login from './pages/Login'
import Register from './pages/Register'
import Invoice from './pages/Invoice'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './context/UserContext'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  return (
    <UserProvider> {/* Wrap the entire application with UserProvider */}
      <div className="App overflow-hidden" id="app">
        <ToastContainer />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/quality" element={<QualityPage />} />
            {/* <Route path="/product/discount" element={<Discounts />} /> */}
            <Route path="/join" element={<Join />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <ProtectedRoute> */}
            <Route path="/invoice" element={<Invoice />} />
            {/* </ProtectedRoute> */}
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;