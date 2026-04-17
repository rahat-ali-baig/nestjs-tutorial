import { UserService } from "../user/user.service";
import { RegisterUserDto } from './registeruser.dto';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    registerUser(registerUserDto: RegisterUserDto): void;
}
