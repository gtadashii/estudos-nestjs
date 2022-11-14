import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    console.log('Request info from auth guard: ', request.headers);

    // voce pode aqui validar se o usuario (sessao) possui alguma regra
    // que habilite certas exibicoes, etc
    return true;
  }
}
