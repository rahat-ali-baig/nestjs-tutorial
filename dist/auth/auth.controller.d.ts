import { UserService } from "../user/user.service";
import { RegisterUserDto } from './registeruser.dto';
export declare class AuthController {
    private readonly userService;
    constructor(userService: UserService);
    register(registerUserDto: RegisterUserDto): Promise<{
        message: string;
    }>;
}
