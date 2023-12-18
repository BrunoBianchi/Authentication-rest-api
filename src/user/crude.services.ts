import { Injectable } from "@nestjs/common";
import { db } from "prisma/database";
@Injectable()
export class CrudeService {
    async createUser(body:{name:string,email:string}) {
     return await db.user.create({data:body});
    }
}