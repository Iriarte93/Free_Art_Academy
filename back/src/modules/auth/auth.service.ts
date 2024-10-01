import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Response, Request } from 'express';
import * as bcrypt from 'bcrypt';

import { UserService } from '../user/user.service';
import { LogUserDTO } from '../user/dto/log-user.dto';

@Injectable()
export class AuthService {
  private readonly JWT_SECRET = 'jwt'; //Sustituir en producion por ENV
  constructor(private readonly userService: UserService) {}
  //Creamos y firmamos el token
  generateToken(payload: any): string {
    return jwt.sign(payload, this.JWT_SECRET, { expiresIn: '1h' });
  }

  //Enviar token en una cookie
  sendTokenAsCookie(token: string, res: Response) {
    //console.log('Token JWT generado:', token);
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: false, //true en Produccion
      sameSite: 'strict',
      maxAge: 3600000, //ms = 1 hora
    });
  }

  // Autenticar y verificar credenciales
  async login(loginUser: LogUserDTO, res: Response) {
    const getUser = await this.userService.getUser(loginUser.userEmail);

    if (!getUser) {
      throw new UnauthorizedException('El usuario no existe');
    }

    const isAuthenticated = await bcrypt.compare(
      loginUser.userPassword,
      getUser.userPassword,
    );

    // Check de las contraseñas
    if (!isAuthenticated) {
      return { success: false, message: 'Credenciales inválidas' };
    }

    // Si todo ok, generamos el token con el userName y el userEmail
    const token = this.generateToken({
      userName: getUser.userName,
      userEmail: getUser.userEmail,
      userId: getUser.id,
    });

    // Enviamos el token como cookie
    this.sendTokenAsCookie(token, res);

    return { success: true };
  }

  //Validacion del token en la cookie
  async validateToken(req: Request) {
    const token = req.cookies.jwt;
    if (!token) {
      throw new UnauthorizedException('No token provided');
    }
    try {
      const payload = jwt.verify(token, this.JWT_SECRET);
      return { success: true, payload };
    } catch (error) {
      throw new UnauthorizedException(error, 'Invalid token');
    }
  }
  //Usar este servicio para recuperar los datos de usuario y mostrarlos en el front del '/user'
  getSession(req: Request) {
    const token = req.cookies.jwt;

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      // Verificar el token JWT
      const decoded = jwt.verify(token, this.JWT_SECRET) as any; // Decodificar el token

      // Si el token es válido, devolver los datos del usuario desde el payload
      return {
        name: decoded.userName,
        email: decoded.userEmail,
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
      console.log(error);
    }
  }
}
