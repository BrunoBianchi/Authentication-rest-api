import { Body, Module, Post } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CrudeService } from "./crude.services";

@Module({
 imports:[],
 controllers :[UserController],
 providers:[CrudeService],
 exports:[]
})
export class UserModel {

}