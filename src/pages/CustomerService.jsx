import {Row, Col } from "solid-bootstrap";
const CustomerService = () => {
    return (
        <div class="same-layout">
            <Row>
                <Col>
                    <div class="contentPadding"> Customer</div>
                </Col>
                <Col>
                    <div class="contentPadding"> Service</div>
                </Col>
            </Row>
        </div>
    )
}

export default CustomerService;