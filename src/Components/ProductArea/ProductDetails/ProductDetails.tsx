import "./ProductDetails.css";
import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {productService} from "../../../Services/ProductService";
import {ProductModel} from "../../../Models/ProductModel";

export function ProductDetails(): JSX.Element {

    const params = useParams();
    const id = +params.prodId;

    const [product, setProduct] = useState<ProductModel>();

    useEffect(()=>{
        productService.getOneProduct(id)
            .then(dbProduct => {
                setProduct(dbProduct)
        }).catch(err => alert(err.message));
    }, []);

    return (
        <div className="ProductDetails">
            <h3>Name: {product?.name}</h3>
            <h3>price: {product?.price}</h3>
            <h3>stock: {product?.stock}</h3>
            <img src={product?.imageUrl}/>

            <br/> <br/>

            <NavLink to="/products">Back</NavLink>
            <span> | </span>
            <NavLink to={"/products/edit/" + product?.id}>Edit</NavLink>
            <span> | </span>
            <NavLink to="#">Delete</NavLink>

        </div>
    );
}
