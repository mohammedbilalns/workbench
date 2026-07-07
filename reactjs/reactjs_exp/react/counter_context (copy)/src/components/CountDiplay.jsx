import { useContext } from "react"
import { CountContext } from "../contexts/countContext"
export default function CountDisplay(){
  const {count} = useContext(CountContext)
  return  <>
    {count}
    </>
}