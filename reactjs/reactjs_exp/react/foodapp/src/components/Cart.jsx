import { useDispatch, useSelector } from "react-redux"
import { removeItem , clearCart} from "../utils/cartSlice"


export default function Cart(){

    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()

    const handleRemove = (item)=>{
        dispatch(removeItem(item))
    }
    const handleClear = ()=>{
        dispatch(clearCart())
    }

    return <div style={{textAlign:"center"}}>
        <h1>Cart</h1>
        {cartItems.length > 0  && <button onClick={handleClear}>Clear cart</button>
 }
    <div>
        {cartItems.length ==0 && <p>Cart is empty add something to the cart </p>}
        {cartItems.map((item) => ( <div key={item}><p>{item}</p> <button onClick={()=> handleRemove(item)}>Remove From cart</button></div>    ))}

    </div>

    </div>
}