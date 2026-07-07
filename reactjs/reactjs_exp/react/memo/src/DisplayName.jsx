import { useContext } from "react"
import NameContext from "./NameContext"
export default function DisplayName(){
    const name = useContext(NameContext)
    return <div>

        {name}
    </div>
}