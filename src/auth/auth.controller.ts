import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto } from './registeruser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return await this.authService.registerUser(registerUserDto);
  }

  @Post('login')
  async login() {
    // assignment

    /** 
     * 1. Receive email and  password
     * 2. Match the email and password
     * 3. Generate JWT token
     */
    return { message: 'Login endpoint' };
  }
}
