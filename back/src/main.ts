import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  const corsOptions: CorsOptions = {
    origin: 'http://localhost:5173', // Dominio permitido
    methods: 'GET,POST,PUT,PATCH,DELETE', // Métodos CRUD permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeceras permitidas
    credentials: true, // Si necesitas incluir cookies o autenticación basada en cabeceras
  };
  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
