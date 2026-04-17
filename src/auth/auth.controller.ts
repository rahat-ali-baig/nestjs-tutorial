import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './registeruser.dto';
import bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    console.log('Received registration data:', registerUserDto);

    const saltRounds = 10;
    const hash = await bcrypt.hash(registerUserDto.password, saltRounds);
    return this.userService.createUser({
      ...registerUserDto,
      password: hash,
    });
  }
}
