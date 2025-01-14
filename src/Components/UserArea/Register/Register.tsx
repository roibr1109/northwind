import "./Register.css";
import {useForm} from "react-hook-form";
import {UserModel} from "../../../Models/UserModel";
import * as dgram from "dgram";
import {notify} from "../../../Utils/notify";
import {userService} from "../../../Services/UserService";
import {useNavigate} from "react-router-dom";

export function Register(): JSX.Element {
    const  {register, handleSubmit} = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user: UserModel) {
        try {
            await userService.register(user);
            notify.success("Welcome" + user.firstName);
            navigate("/home");
        } catch (err: any) {
            notify.error(err)
        }
    }

    return (
        <div className="Register">
            <form onSubmit={handleSubmit(send)}>
                <label>First name: </label>
                <input type="text" {...register("firstName")}/>

                <label>Last name: </label>
                <input type="text" {...register("lastName")}/>

                <label>email: </label>
                <input type="email" {...register("email")}/>

                <label>Password: </label>
                <input type="password" {...register("password")}/>

                <button>Register</button>
            </form>
        </div>
    );
}
