import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";
import { ROLES_KEY } from "src/decorators/role.decorator";
import { Role } from "src/enums/role.enum";
import { CrudeService } from "src/user/crude.service";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector){}
    async canActivate(context: ExecutionContext){
        const requiredRole = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY,[context.getHandler(),context.getClass()])
        console.log(requiredRole)
        const request =  context.switchToHttp().getRequest();
        const {user} = request;
        if(!requiredRole) {
            return true;
        }else {
            const rolesFilter = requiredRole.filter(role=>role === user.role)
            return rolesFilter.length > 0;
        }

        
}
}