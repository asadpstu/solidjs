import { Row, Col } from "solid-bootstrap";
import useRedux from "../redux/useRedux";
import reduxStore from "../redux/store";
import actions from "../redux/actions";

const Products = () => {
    const [store, { addTodo }] = useRedux( reduxStore, actions );
    return (
        <div>
            <Row>
                <Col>
                    <div class="contentPadding"> Products</div>
                </Col>
                <Col>
                    <div class="contentPadding">
                        <For each={store.data}>
                            {(todo) => {
                                const { id, text } = todo;
                                return <div><span style={{ "text-decoration": todo.completed ? "line-through" : "none" }}> {text} </span></div>
                            }}
                        </For>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Products;