import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { AticlesModule } from './articles/articles.module';



@Module({
  imports: [
    AticlesModule,
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,

      graphiql: true,
    }),
  ],
})
export class AppModule {}
