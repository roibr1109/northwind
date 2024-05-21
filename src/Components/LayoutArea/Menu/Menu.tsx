import "./Menu.css";
import {NavLink} from "react-router-dom";
import {TotalProducts} from "../../ProductArea/TotalProducts/TotalProducts";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products" end>Products</NavLink>
            <NavLink to="/products/new">Add Product</NavLink>
            <NavLink to="/about">About</NavLink>
            <TotalProducts/>
        </div>
    );
}
