import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/auth/registeruser.dto';

@Injectable()
export class UserService {
  createUser(registerUserDto: RegisterUserDto) {
    return { message: 'User created successfully' };
  }
}
