import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT) || 5434,
        username: process.env.DB_USERNAME || 'admin',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_DATABASE || 'fullstackboilerplate',
        entities: [__dirname + '/modules/**/entity/*.entity{.ts,.js}'],
        synchronize: true,
      })
    }),
  ],
})
export class DatabaseModule {}
