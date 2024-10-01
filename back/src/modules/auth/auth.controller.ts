import { Controller, Post, Get, Body, Res, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogUserDTO } from '../user/dto/log-user.dto';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async loginUser(@Body() logUser: LogUserDTO, @Res() res: Response) {
    try {
      const result = await this.authService.login(logUser, res);
      return res.status(result.success ? 200 : 401).send(result);
    } catch (error) {
      console.log(error, 'Error 500');
    }
  }

  @Get('validate')
  async validateSession(@Req() req: Request, @Res() res: Response) {
    try {
      const isValid = await this.authService.validateToken(req);
      if (isValid) {
        return res.status(200).send({ success: true });
      }
    } catch (error) {
      return res.status(401).send({ success: false });
      console.log(error);
    }
  }

  @Get('session')
  async getSession(@Req() req: Request, @Res() res: Response) {
    try {
      // Obtener el token y validar si es válido
      const sessionData = await this.authService.getSession(req);

      // Si hay datos de la sesión, devolver la información del usuario
      if (sessionData) {
        return res.status(200).send(sessionData);
      } else {
        return res.status(401).send({ success: false });
      }
    } catch (error) {
      console.error('Error al obtener la sesión:', error);
      return res
        .status(500)
        .send({ success: false, error: 'Error del servidor' });
    }
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    try {
      //Para borrar la cookie hay que Setearla en una facha del pasado.
      res.cookie('jwt', '', {
        httpOnly: true,
        secure: false, // true en producción (HTTPS)
        sameSite: 'strict',
        expires: new Date(0),
        path: '/',
      });
      return res.status(200).send({ success: true, message: 'Logged out' });
    } catch (error) {
      console.error('Error al hacer logout:', error);
      return res.status(500).send({ success: false, message: 'Logout failed' });
    }
  }
}
