import {RegisterOptions} from "react-hook-form";

export class ProductModel {
	public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
    public image: File;

    public static nameValidation: RegisterOptions = {
        required: {value: true, message: "Missing name."}, minLength: {value: 2, message: "Name too short"}
    };
}
