import { Navbar, Nav, Container, Offcanvas, Button } from "solid-bootstrap";
import { Link, useNavigate } from 'solid-app-router';
import Amazon from '../assets/Amazon.png'
import Fa from 'solid-fa'
import { faBank, faBaseball, faBeer, faBlender, faBurger, faChildDress, faFlag, faFootball, faGamepad, faGlassCheers, faHome, faLocationDot, faMugHot, faMusic, faPersonDress, faPersonDressBurst, faPlay, faShoppingBag, faSignOut, faVideo, faWarning } from '@fortawesome/free-solid-svg-icons'

/* Redux */
import useRedux from "../redux/redux/useRedux";
import reduxStore from "../redux/store/loginStore";
import actions from "../redux/action/loginActions";

function NavigateBar() {
    const [store,action] = useRedux(reduxStore,actions);
    const navigate = useNavigate()
    const logout = () =>{
        localStorage.removeItem("login")
        localStorage.removeItem("username")
        const emptyPayload = {}
        action.clearData(emptyPayload);
        navigate("/login", { replace: true })
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand>
                        <Link href='/' class="no-underline color-white">
                            <img class="me-2" src={Amazon} height="40" alt="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav class="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="/customer-service">Customer service</Nav.Link>
                            <Nav.Link href='/offer'>Offer & Discount</Nav.Link>
                            <Nav.Link href="/mycart">My cart</Nav.Link>
                        </Nav>
                        <Nav>
                           {
                             !store.userName 
                             ?  
                             <Nav.Link href="/login">Login</Nav.Link> 
                             : 
                             <Nav.Link><span class="greetings">welcome, {store.userName} !</span></Nav.Link> 
                           }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {
                store.userName 
                && 
                <Navbar bg="light" expand={false}  >
                    <Container>
                        <Navbar.Brand>
                            <Button  class="suggestions">I-Phone 13</Button>
                            <Button variant="info" class="suggestions">Samsung galaxy</Button>
                            <Button variant="info" class="suggestions">Vitamins</Button>
                            <Button variant="info" class="suggestions">Baby care</Button>
                            <Button variant="info" class="suggestions">Grocesary </Button>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">
                                    <Link href='/' class="no-underline color-white">
                                       <img class="me-2" src={Amazon} height="29" alt="logo" />
                                     </Link>

                                     <span style="margin-left:10px">SOLID MART</span>
                                     

                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <div style="border-bottom:2px solid #000;"></div>
                            <Offcanvas.Body>
                                <Nav class="justify-content-end flex-grow-1 pe-3">
                                    <div class="nav-title">Important</div>
                                    <Nav.Link href="#"><Fa icon={faHome} color="#000" size="1x"/> <span class="nav-item-text">Home</span></Nav.Link>
                                    <Nav.Link href="#"><Fa icon={faVideo} color="#000" size="1x"/> <span class="nav-item-text">Video</span></Nav.Link>
                                    <Nav.Link href="#"><Fa icon={faBaseball} color="#000" size="1x"/> <span class="nav-item-text">Games</span></Nav.Link>
                                    
                                    <div class="nav-devider"></div>
                                    <div class="nav-title">Information</div>
                                    <Nav.Link href='#'><Fa icon={faLocationDot} color="#000" size="1x"/> <span class="nav-item-text">Find Location</span></Nav.Link>
                                    <Nav.Link href="#"><Fa icon={faBank} color="#000" size="1x"/> <span class="nav-item-text">Payment Methods</span></Nav.Link>
                                    <Nav.Link href="#"><Fa icon={faWarning} color="#000" size="1x"/> <span class="nav-item-text">Notice</span></Nav.Link>
                                    <div class="nav-devider"></div>
                                    <div class="nav-title">Trendings</div>
                                    <Nav.Link href="#"><Fa icon={faShoppingBag} color="#000" size="1x"/> <span class="nav-item-text">Deals</span></Nav.Link>
                                    <Nav.Link href="#"><Fa icon={faFootball} color="#000" size="1x"/> <span class="nav-item-text">Game</span></Nav.Link>
                                    <Nav.Link href="#"><Fa icon={faBurger} color="#000" size="1x"/> <span class="nav-item-text">Fast food</span></Nav.Link>
                                    <Nav.Link href="#"><Fa icon={faMugHot} color="#000" size="1x"/> <span class="nav-item-text">Drinks</span></Nav.Link>
                                    <div class="nav-devider"></div>
                                    <Nav.Link onClick={()=>logout()} >
                                     <div class="logout"><Fa icon={faSignOut} color="#000" size="1x"/><span class="nav-item-text-logout">LOGOUT</span></div>
                                    </Nav.Link>
                                    
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            }
        </>
    )
}
export default NavigateBar;

