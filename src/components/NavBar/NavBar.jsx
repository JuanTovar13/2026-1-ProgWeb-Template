
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  return (
    
      <ul>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/products">Products</Link>
      </ul>
  )
}