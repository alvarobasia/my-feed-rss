import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { FeedModule } from './feed/feed.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ req }),
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
    }),
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    FeedModule,
  ],
  providers: [],
})
export class AppModule {}
