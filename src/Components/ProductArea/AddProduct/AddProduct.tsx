import "./AddProduct.css";
import {useNavigate} from "react-router-dom";

import {ProductModel} from "../../../Models/ProductModel";
import {useForm} from "react-hook-form";
import {productService} from "../../../Services/ProductService";
import {notify} from "../../../Utils/notify";

export function AddProduct(): JSX.Element {
    const navigate = useNavigate();
    const {register, handleSubmit, formState} = useForm<ProductModel>();

    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0];
            await productService.addProduct(product);
            navigate("/products");
            notify.success("works")
        } catch (err: any) {
            notify.error(err);
        }
    }


    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(send)}>
                <label>Name: </label>
                <input type="text" {...register("name", ProductModel.nameValidation)}/>
                <span className="error">{formState?.errors.name?.message}</span>

                <label>Price: </label>
                <input type="text" {...register("price")}/>

                <label>Stock: </label>
                <input type="text" {...register("stock")}/>

                <label>image: </label>
                <input type="file" {...register("image")}/>

                <button>Add</button>
            </form>
        </div>
    );
}
