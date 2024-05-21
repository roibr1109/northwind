import axios, {AxiosRequestConfig} from "axios";
import {ProductModel} from "../Models/ProductModel";
import {appConfig} from "../Utils/AppConfig";
import {productActions, store} from "../Redux/AppState";

class ProductService {
	public async getAllProducts(): Promise<ProductModel[]> {
        if (store.getState().products.length > 0) return store.getState().products;

        const response = await axios.get<ProductModel[]>(appConfig.productsUrls);
        const products = response.data;

        const action = productActions.initProducts(products);
        store.dispatch(action);

        return products;
    }

    public async getOneProduct(id: number) {

        const desiredProduct = store.getState().products.find(p => p.id === id);

        if (desiredProduct) return desiredProduct;

        const response = await axios.get<ProductModel>(appConfig.productsUrls + id);

        return response.data;
    }

    public async addProduct(product: ProductModel) {
        const options: AxiosRequestConfig = { headers: { "Content-Type": "multipart/form-data"} }
        const response = await axios.post<ProductModel>(appConfig.productsUrls, product, options );
        const dbProduct = response.data;

        const action = productActions.addProduct(dbProduct);
        store.dispatch(action);
    }

    public async updateProduct(product: ProductModel) {
        const options: AxiosRequestConfig = { headers: { "Content-Type": "multipart/form-data"} }
        const response = await axios.put<ProductModel>(appConfig.productsUrls + product.id, product, options );
        const dbProduct = response.data;

        const action = productActions.updateProduct(dbProduct);
        store.dispatch(action);
    }
}

export const productService = new ProductService();

