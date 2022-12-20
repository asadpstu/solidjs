import { Row, Col } from "solid-bootstrap";
import useRedux from "../redux/useRedux";
import reduxStore from "../redux/store";
import actions from "../redux/actions";

function Home() {
    const [store, { addTodo }] = useRedux(reduxStore,actions);
    let input;

    return (
        <div>
            <Row>
                <Col>
                    <div class="contentPadding"> Home</div>
                </Col>
                <Col>
                    <div class="contentPadding">
                            <div>
                                <input ref={input} />
                                <button onClick={(e) => { if (!input.value.trim()) return; addTodo(input.value); input.value = ""; }} > Add Todo </button>
                            </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Home;