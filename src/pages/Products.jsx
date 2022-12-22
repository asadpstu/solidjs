import { Row, Col } from "solid-bootstrap";
import useRedux from "../redux/redux/useRedux";
import productStore from "../redux/store/productStore";
import productActions from "../redux/action/productActions";
import { For } from "solid-js";

function Products() {
    const [store,action] = useRedux(productStore,productActions)

    const createProduct = () =>{
        const high = 13
        const low  = 6
        const product = {
            product : "I-phone "+Math.floor(Math.random() * (high - low) + low),
            price : Math.ceil(Math.random() * 10000),
            quantity : Math.ceil(Math.random() * 10)
          }
        action.addProduct(product)

    }
    return (
        <div class="same-layout">
            <Row>
                <Col>
                    <div class="contentPadding"> 
                    <button onClick={()=>{createProduct()}}>Add product</button>
                    </div>
                </Col>
                <Col>
                    <div class="contentPadding">
                            Product List:
                            <hr/>
                            <For each={store.products} fallback={<div>No items</div>}>
                              {(item, index) => <div data-index={index()} style="border:1px solid #CCC;margin:5px;padding:10px">
                                  Sl : {index()+1} &nbsp; Name : {item.product}  &nbsp; Price : {item.price}  &nbsp;  Quantity : {item.quantity}
                              </div>}
                            </For>
                            
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Products;