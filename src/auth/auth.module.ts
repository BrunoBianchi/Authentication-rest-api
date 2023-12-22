import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModel } from "src/user/user.module";
import { AuthService } from "./auth.service";


@Module({
    imports:[JwtModule.register({
        secret:"5C5TL@7oO::B,NF*immpq+P(vxd}s0#W8(-s4E/G&_>jX[1_MK"
    }),UserModel],
    controllers:[AuthController],
    providers:[AuthService],
})
export class AuthModule  {
    
}