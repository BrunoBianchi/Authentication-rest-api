import { Injectable } from '@nestjs/common';
import { db } from 'prisma/database';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/enums/role.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CrudeService {
  @Roles(Role.Admin)
  async createUser(body: { name: string; email: string; password: string }) {
    body.password = await bcrypt.hash(body.password, await bcrypt.genSalt());
    return await db.user.create({
      data: body,
    });
  }

  async readOne(id: string) {
    return await db.user.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });
  }

  @Roles(Role.Admin, Role.User)
  async listAll() {
    return await db.user.findMany();
  }

  async updateOne(
    id: string,
    body: { name?: string; email?: string; role?: number },
  ) {
    return await db.user.update({
      where: {
        uid: id,
      },
      data: body,
    });
  }
  @Roles(Role.Admin)
  async deleteOne(id: string) {
    return await db.user.delete({
      where: {
        uid: id,
      },
    });
  }

  async exists(id: string) {
    return await db.user.count({
      where: {
        uid: id,
      },
    });
  }
}
