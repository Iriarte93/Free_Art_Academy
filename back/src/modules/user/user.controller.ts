import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express'; // Importa Response de Express
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() newUser: CreateUserDTO, @Res() res: Response) {
    try {
      await this.userService.createUser(newUser);
      // Devolver solo un código HTTP 201 con un mensaje de éxito
      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'User created successfully' });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // Manejo de errores
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error creating user' });
    }
  }
}
