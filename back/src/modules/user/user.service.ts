import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import * as bcrypt from 'bcrypt';

import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDTO) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.userPassword, saltRounds);

    //const newUser = this.userRepository.create(user);

    const newUser = this.userRepository.create({
      ...user, //Spread operator
      userPassword: hashedPassword, //sustituir la contraseña por la hasheada
    });
    return this.userRepository.save(newUser);
  }

  async getUser(userEmail: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: {
        userEmail,
      },
    });
  }
}
