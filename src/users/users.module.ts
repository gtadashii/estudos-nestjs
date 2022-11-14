import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { ExampleMiddleware } from './middlewares/example.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes(UsersController)
    // caso queria aplicar regras especificas:
    // consumer.apply(ExampleMiddleware).forRoutes({
    //   path: 'users',
    //   method: RequestMethod.GET
    // });

    // caso queria mais middlewares sendo utilizados, basta
    // adicionar `.apply` no final da regra já utilizada.
  }
}
