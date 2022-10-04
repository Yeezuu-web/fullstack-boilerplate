import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import * as Store from 'connect-redis';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import { redis } from './redis';

async function bootstrap() {
  try {
    const RedisStore = Store(session); 
    const PORT = process.env.PORT || 8000
    // const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    //   // httpsOptions,
    //   transport: Transport.REDIS, //setting transporter
    //   options: {
    //     url: 'redis://localhost:6379',
    //   },
    // });
    const app = await NestFactory.create(AppModule, {
      cors: {
        credentials: true,
        origin: process.env.CLIENT_URL
      }
    });
    app.setGlobalPrefix('/api');
    app.use(cookieParser());
    app.use(
      session({
        store: new RedisStore({
          client: redis as any
        }),
        secret: process.env.SESSION_ID_SECRET,
        name: 'sid',
        resave: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          sameSite: true,
          secure: process.env.NODE_ENV === 'prduction',
          maxAge: 100 * 60 * 60 * 24 * 365
        }
      }),
    );
  
    const config = new DocumentBuilder()
      .setTitle('API')
      .setVersion('1.0.0')
      .setExternalDoc('For more information', 'http://swagger.io')
      .build(); // open api info
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => console.log(`Server started on port - localhost:${PORT}`));
  } catch (error) {
    console.log(error)
  }
}
bootstrap();
