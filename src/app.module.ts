import { DatabaseModule } from './modules/database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { RolesModule } from './modules/roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    RolesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
