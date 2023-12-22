import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly auth:AuthService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const {authorization} = context.switchToHttp().getRequest().headers;
        return this.auth.isvalidToken((authorization?? '').split(" ")[1]);
    }
}