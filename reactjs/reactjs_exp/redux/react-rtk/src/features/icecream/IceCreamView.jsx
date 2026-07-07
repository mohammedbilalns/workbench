import { useDispatch, useSelector } from "react-redux"
import { ordered, restocked } from "./iceCreamSlice"
import { useState } from "react"
export default function IceCreamView(){

    const [qty, setQty] = useState(1) 
    const numOfIcecreams = useSelector((state)=> state.icecream.numberOfIceCreams)
    const dispatch = useDispatch()
    return <div>

        <h2>Number of Ice creams - {numOfIcecreams}</h2>
        <button onClick={()=>dispatch(ordered())}>Order Ice Cream </button>
        <input type="number" value={qty} onChange={(e)=>setQty(parseInt(e.target.value))} />
        <button onClick={()=>dispatch(restocked(qty ))}>Restock Ice cream </button>
    </div>
}

