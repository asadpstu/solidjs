
import styles from './App.module.css';
import { Container } from "solid-bootstrap";
import NavigateBar from './component/NavigateBar';
import { Routes,Route } from 'solid-app-router';
import { lazy, Suspense } from "solid-js";
import LazyLoading from './component/LazyLoading';



/**
 * Implementing lazy loading
 */
const Products = lazy(() => import("./pages/Products"));
const CustomerService = lazy(() => import("./pages/CustomerService"));
const Offer = lazy(() => import("./pages/Offer"));
const Mycart = lazy(() => import("./pages/Mycart"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

/**
  import Products from './pages/Products'; 
  import CustomerService from './pages/CustomerService';
  import Offer from './pages/Offer';
  import Mycart from './pages/Mycart';
  import Home from './pages/Home';
*/

function App() {
  console.log("App.jsx")
  return (
    <>
      <NavigateBar />
      <Container style="margin-top:10px;">
        <Routes>
          {/* <Route path='/' element={<LazyLoading/>} /> */}
          <Route path='/home' element={<Suspense fallback={<LazyLoading/>}> <Home /> </Suspense> } />
          <Route path="/products" element={<Suspense fallback={<LazyLoading/>}> <Products/> </Suspense>} />
          <Route path="/customer-service" element={<Suspense fallback={<LazyLoading/>}> <CustomerService /> </Suspense>} />
          <Route path="/offer" element={<Suspense fallback={<LazyLoading/>}> <Offer/> </Suspense>} />
          <Route path="/mycart" element={<Suspense fallback={<LazyLoading/>}> <Mycart /> </Suspense>} />
          <Route path="/login" element={<Suspense fallback={<LazyLoading/>}> <Login /> </Suspense>} />
          <Route path="/" element={<Suspense fallback={<LazyLoading/>}> <Login /> </Suspense>} />
        </Routes>
      </Container>
    </>

  );
}

export default App;
