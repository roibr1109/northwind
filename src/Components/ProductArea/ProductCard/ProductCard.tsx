import "./ProductCard.css";
import {ProductModel} from "../../../Models/ProductModel";
import {useNavigate} from "react-router-dom";

type ProductCardProps = {
    product: ProductModel;
};

export function ProductCard({product}: ProductCardProps): JSX.Element {
    const navigate = useNavigate();

    function displayDetails() {
        navigate("/products/details/" + product.id);
    }

    return (
        <div className="ProductCard" onClick={displayDetails}>
            <div>
                {product.name} <br/>
                Price: {product.price} <br/>
                Stock: {product.stock} <br/>
            </div>
            <div>
                <img src={product.imageUrl}/>
            </div>
        </div>
    );
}
