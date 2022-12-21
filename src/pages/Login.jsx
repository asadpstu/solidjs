
import { Row, Col, Card, InputGroup, FormControl, Button } from "solid-bootstrap";
import { useNavigate } from 'solid-app-router'
import { createSignal } from "solid-js";

import useRedux from "../redux/redux/useRedux";
import reduxStore from "../redux/store/loginStore";
import actions from "../redux/action/loginActions";


const Login = () => {
    const [loginPayload, setLoginPayload] = createSignal({});
    const [store, action] = useRedux(reduxStore,actions);
    
    
    const navigate = useNavigate()
    /* If already logged in */
    if(store.userName ) navigate('/home', { replace: true })

    const loginPayloadFunc = (e) => {
        let temp = {}
        let {value,name} = e.target
        temp[name] = value
        setLoginPayload({...loginPayload(), ...temp})
    }

    const loginFunc = () =>{
        /* Fake Api */
        const {username,password} = loginPayload()
        if(username === "test" && password === "12345"){
            setTimeout(() => {
                localStorage.setItem("login", 1)
                localStorage.setItem("username", "Test-User-01")
                const loginResponse = {
                    fullName : "Vladimir Putin",
                    userName : "putin007",
                    country : "Russia",
                    contact : "01325781848",
                    gender : "Male",
                    designation : "President"
                }
                action.addTodo(loginResponse);
                navigate('/home', { replace: true })
            }, 10);
        }
        else
        {
            alert("Username/Password mismatch")
        }
    }
    return (
        <div style="margin-top:15%">
            <Row>
                <Col lg={3} sm={12} md={12}>
                </Col>
                <Col lg={6} sm={12} md={12}>
                    <Card class="text-center">
                        <Card.Header><b>User Sign-in</b></Card.Header>
                        <Card.Body>
                            <Row>
                                <Col lg={12} sm={12} md={12}>
                                    <InputGroup class="mt-3">
                                        <InputGroup.Text id="basic-addon1">User name</InputGroup.Text>
                                        <FormControl
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            onkeyup={(e)=>{loginPayloadFunc(e)}}
                                            name="username"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={12} sm={12} md={12}>
                                    <InputGroup class="mt-3">
                                        <InputGroup.Text id="basic-addon1">Password &nbsp;</InputGroup.Text>
                                        <FormControl
                                            placeholder="password"
                                            aria-label="password"
                                            aria-describedby="basic-addon1"
                                            onkeyup={(e)=>{loginPayloadFunc(e)}}
                                            name="password"
                                            type="password"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={4} sm={12} md={12}></Col>
                                <Col lg={4} sm={12} md={12}>
                                    <Button variant="primary" onclick={() => { loginFunc() }} style="width:100%" class="mb-5 mt-3"> Login</Button>
                                </Col>
                                <Col lg={4} sm={12} md={12}></Col>
                            </Row>

                        </Card.Body>

                    </Card>
                </Col>
                <Col lg={3} sm={12} md={12}>
                </Col>
            </Row>
        </div>
    )
}

export default Login;