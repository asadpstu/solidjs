import { Navbar, Nav, Container, Offcanvas, Button } from "solid-bootstrap";
import { Link, useNavigate } from 'solid-app-router';
import Amazon from '../assets/Amazon.png'

function NavigateBar() {
    const navigate = useNavigate()
    const logout = () =>{
        localStorage.removeItem("login")
        localStorage.removeItem("username")
        navigate("/login", { replace: true })
    }
    console.log("navigate")
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
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
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link onClick={()=>logout()}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar bg="light" expand={false}>
                <Container>
                    <Navbar.Brand>
                        {/* <Link href='/' class="no-underline color-white">
                            <img class="me-2" src={Amazon} height="38" alt="logo" />
                        </Link> */}
                        <Button variant="info" style="margin-right: 2px;width:100px;">Home</Button>
                        <Button variant="info" style="margin-right: 2px;width:100px;">Offer</Button>
                        <Button variant="info" style="margin-right: 2px;width:100px;">Discount</Button>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">More options</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav class="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/products">Products</Nav.Link>
                                <Nav.Link href="/customer-service">Customer service</Nav.Link>
                                <Nav.Link href='/offer'>Offer & Discount</Nav.Link>
                                <Nav.Link href="/mycart">My cart</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}
export default NavigateBar;

