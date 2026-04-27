import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from './user.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return await this.authService.registerUser(registerUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginUserDto) {
    return await this.authService.loginUser(loginDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const userId = req.user.sub;

    const user = await this.userService.getUserById(userId);

    console.log(user)

    return { message: 'Profile fetched successfully!', user };
  }
}
