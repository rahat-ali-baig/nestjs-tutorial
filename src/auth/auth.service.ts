import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './registeruser.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    registerUser(registerUserDto: RegisterUserDto) {
        // return this.userService.createUser();
    }
}
