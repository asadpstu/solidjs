
import { Row, Col, Card, InputGroup, FormControl, Button } from "solid-bootstrap";
import { useNavigate } from 'solid-app-router'
import { createSignal } from "solid-js";
const Login = () => {
    const [loginPayload, setLoginPayload] = createSignal({});
    const navigate = useNavigate()

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
                navigate('/home', { replace: true })
            }, 1000);
        }
        else
        {
            alert("Username/Password mismatch")
        }
    }
    return (
        <div class="mt-5">
            <Row>
                <Col lg={2} sm={12} md={12}>
                </Col>
                <Col lg={8} sm={12} md={12}>
                    <Card class="text-center">
                        <Card.Header>Login</Card.Header>
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
                                    <InputGroup class="mt-2">
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
                                    <Button variant="primary" onclick={() => { loginFunc() }} style="width:100%" class="mb-5 mt-2"> Login</Button>
                                </Col>
                                <Col lg={4} sm={12} md={12}></Col>
                            </Row>

                        </Card.Body>

                    </Card>
                </Col>
                <Col lg={2} sm={12} md={12}>
                </Col>
            </Row>
        </div>
    )
}

export default Login;