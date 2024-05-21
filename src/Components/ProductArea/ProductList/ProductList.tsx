import "./ProductList.css";
import {productService} from "../../../Services/ProductService";
import {useEffect, useState} from "react";
import {ProductModel} from "../../../Models/ProductModel";
import {ProductCard} from "../ProductCard/ProductCard";

export function ProductList(): JSX.Element {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productService.getAllProducts().then(dbProducts =>
            setProducts(dbProducts)
        ).catch(err => alert(err.message))
    }, []);

    return (
        <div className="ProductList">
            {products.map(p => <ProductCard key={p.id} product={p}/>)}
        </div>
    );
}
