import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from 'prisma/database';
@Injectable()
export class CrudeService {
  async createUser(body: { name: string; email: string,password:string }) {
    return await db.user.create({
      data: body,
    });
  }

  async readOne(id: string) {
    return await db.user.findFirst({
      where: {
        uid: {
          equals: id,
        },
      },
    });
  }

  async listAll() {
    return await db.user.findMany();
  }

  async updateOne(id: string, body: { name?: string; email?: string }) {
    return await db.user.update({
      where: {
        uid: id,
      },
      data: body,
    });
  }

  async deleteOne(id: string) {
    return await db.user.delete({
      where: {
        uid: id,
      },
    });
  }

  async exists(id:string) {
    return await db.user.count({
      where:{
        uid:id
      }
    })

  } 
}
