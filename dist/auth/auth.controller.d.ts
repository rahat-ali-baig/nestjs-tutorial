import { LoginUserDto, RegisterUserDto } from './user.dto';
import { AuthService } from './auth.service';
import { UserService } from "../user/user.service";
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    register(registerUserDto: RegisterUserDto): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, import("../user/schemas/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("../user/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
    }>;
    login(loginDto: LoginUserDto): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, import("../user/schemas/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("../user/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
        access_token: string;
    }>;
    getProfile(req: any): Promise<{
        message: string;
        user: (import("mongoose").Document<unknown, {}, import("../user/schemas/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("../user/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | null;
    }>;
}
