import { Body, MiddlewareConsumer, Module, NestModule, Post, RequestMethod, forwardRef } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CrudeService } from "./crude.service";
import { UserIdCheckMiddleware } from "src/middlewares/user-id-check.middleware";
import { AuthController } from "src/auth/auth.controller";
import { AuthService } from "src/auth/auth.service";
import { AuthModule } from "src/auth/auth.module";

@Module({
 imports:[forwardRef(()=>AuthModule)],
 controllers :[UserController],
 providers:[CrudeService],
 exports:[CrudeService]
})
export class UserModel implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddleware).forRoutes({
            path:'users/:id',
            method:RequestMethod.ALL
        })
    }
}