
import styles from './App.module.css';
import { Container } from "solid-bootstrap";
import NavigateBar from './component/NavigateBar';
import { Routes,Route, useNavigate } from 'solid-app-router';
import { lazy, Suspense } from "solid-js";
import LazyLoading from './component/LazyLoading';

import useRedux from "./redux/redux/useRedux";
import actions from './redux/action/loginActions';
import reduxStore from "./redux/store/loginStore";

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
  const [store,action] = useRedux(reduxStore,actions);
  const navigate = useNavigate()
  
  /* Check if already loggedin */
  const isLoggedIn = localStorage.getItem("login")
  const isUserName = localStorage.getItem("username")
  if(isLoggedIn && isUserName){
    /* Fake api call */
    const loginResponse = {
      fullName : "Vladimir Putin",
      userName : "putin007",
      country : "Russia",
      contact : "01325781848",
      gender : "Male",
      designation : "President"
    }
    action.addTodo(loginResponse);
  }
  else navigate('/login', { replace: true })
  

  return (
    <>
      <NavigateBar />
      <Container fluid>
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
