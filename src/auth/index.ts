import AuthRouter from "./AuthRouter";

export {
    AuthRouter
}

export interface Isignup {
    username: string;
    password: string;
    email: string;
    phone_number: string;
    first_name: string;
    last_name: string;
}