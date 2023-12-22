import { CanActivate, ExecutionContext, Inject, Injectable, forwardRef } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";
import { CrudeService } from "src/user/crude.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly auth:AuthService,
        private readonly crude:CrudeService
        ){}
    async canActivate(context: ExecutionContext){
        const request =  context.switchToHttp().getRequest();
        const {authorization} = request.headers;
        request.user =  await this.crude.readOne(this.auth.checkToken((authorization?? '').split(" ")[1]).id)
        
        return this.auth.isvalidToken((authorization?? '').split(" ")[1]);
    }
}