import { RegisterUserDto } from './registeruser.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerUserDto: RegisterUserDto): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, import("../user/schemas/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("../user/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
        token: string;
    }>;
    login(): Promise<{
        message: string;
    }>;
}
