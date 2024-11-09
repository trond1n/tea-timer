import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigSetupModule } from './config/config.module';
import { TeaModule } from './modules/tea/tea.module';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { InfusionModule } from './modules/infusion/infusion.module';
import { RatingModule } from './modules/tea-rating/tea-rating.module';
import { NoteModule } from './modules/tea-note/tea-note.module';
import { PasswordModule } from './modules/password/password.module';
import { BrewNoteModule } from './modules/brewing-note/brewing-note.module';
import { BrewTimeModule } from './modules/brewing-time/brewing-time.module';

@Module({
  providers: [],
  imports: [
    ConfigSetupModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TeaModule,
    UserModule,
    AuthModule,
    InfusionModule,
    RatingModule,
    NoteModule,
    BrewNoteModule,
    PasswordModule,
    BrewTimeModule,
  ],
})
export class AppModule {}
