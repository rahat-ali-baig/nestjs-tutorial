import { RegisterUserDto } from "../auth/registeruser.dto";
export declare class UserService {
    createUser(registerUserDto: RegisterUserDto): {
        message: string;
    };
}
