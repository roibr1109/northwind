import "./TotalProducts.css";
import {AppState, store} from "../../../Redux/AppState";
import {useEffect, useState} from "react";
import {set} from "react-hook-form";
import {useSelector} from "react-redux";

export function TotalProducts(): JSX.Element {

    const productsCounter = useSelector<AppState, number>(store => store.products.length);

    // const [productsCounter, setCount] = useState<number>(0);
    //
    // useEffect(() => {
    //     store.subscribe(() => {
    //         setCount(store.getState().products.length)
    //     })
    // }, []);

    return (
        <div className="TotalProducts">
			<span>Total Products: {productsCounter}</span>
        </div>
    );
}
