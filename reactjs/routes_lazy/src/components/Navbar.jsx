import { Link } from "react-router-dom"

export default function Navbar(){
    return <>
    <div style={{display:"flex", justifyContent:"space-between"}}>
        <Link>Home</Link>
        <Link to="/about">About</Link>
        <p>Contact Us</p>
    </div>
    
    </>
}