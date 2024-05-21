import "./EditProduct.css";
import {ProductModel} from "../../../Models/ProductModel";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {productService} from "../../../Services/ProductService";
import {useEffect} from "react";

export function EditProduct(): JSX.Element {
    const {register, handleSubmit, formState, setValue} = useForm<ProductModel>();
    const params = useParams();
    const id = +params.prodId;

    useEffect(()=>{
        productService.getOneProduct(id)
            .then(dbProduct => {
                setValue("name", dbProduct.name);
                setValue("price", dbProduct.price);
                setValue("stock", dbProduct.stock);
                setValue("id", dbProduct.id);

            }).catch(err => alert(err.message));
    }, []);

    async function send(product: ProductModel) {
    }

    return (
        <div className="EditProduct">
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

                <button>Update</button>
            </form>
        </div>
    );
}
