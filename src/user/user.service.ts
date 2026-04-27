import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterUserDto } from 'src/auth/user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(registerUserDto: RegisterUserDto) {
    try {
      return await this.userModel.create({
        first_name: registerUserDto.first_name,
        last_name: registerUserDto.last_name,
        email: registerUserDto.email,
        password: registerUserDto.password,
      });
    } catch (error: unknown) {
      console.error('Error creating user:', error);

      const err = error as { code?: number };
      const DUPLICATE_KEY_ERROR_CODE = 11000;
      if (err.code === DUPLICATE_KEY_ERROR_CODE) {
        throw new ConflictException('Email already exists');
      }
      throw err;
    }
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async getUserById(userId: string) {
    return await this.userModel.findById(userId).select('-password').exec();
  }
}
