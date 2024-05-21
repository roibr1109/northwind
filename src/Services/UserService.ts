import {UserModel} from "../Models/UserModel";
import axios from "axios";
import {appConfig} from "../Utils/AppConfig";
import {jwtDecode} from "jwt-decode";
import {store, userActions} from "../Redux/AppState";
import {CredentialsModels} from "../Models/CredentialsModels";

class UserService {

    public async register(user: UserModel) {
        const response = await axios.post<string>(appConfig.registerUrl, user);
        const token = response.data;
        const dbUser = jwtDecode<{ user: UserModel}>(token).user;

        const action = userActions.registerUser(dbUser);
        store.dispatch(action);
    }

    public async login(user: CredentialsModels) {
        const response = await axios.post<string>(appConfig.loginUrl, user);
        const token = response.data;
        const dbUser = jwtDecode<{ user: UserModel}>(token).user;

        const action = userActions.loginUser(dbUser);
        store.dispatch(action);
    }

    public logout() {
        const action = userActions.logoutUser();
        store.dispatch(action);
    }
}

export const userService = new UserService();
