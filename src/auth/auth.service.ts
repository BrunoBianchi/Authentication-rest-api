import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { db } from 'prisma/database';
import { User } from '@prisma/client';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { CrudeService } from 'src/user/crude.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly crude: CrudeService,
  ) {}

  createToken(user: User) {
    return {
      accessToken: this.jwt.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        {
          expiresIn: '7 days',
          subject: String(user.id),
          issuer: 'login',
          audience: 'users',
        },
      ),
    };
  }

  checkToken(token: string) {
    try {
      const data = this.jwt.verify(token, {
        audience: 'users',
        issuer: 'login',
      });
      return data;
    } catch (err) {
      throw new BadRequestException(err.toString());
    }
  }

  isvalidToken(token: string) {
    try {
      this.checkToken(token);
      return true;
    } catch (err) {
      return false;
    }
  }

  async login(email: string, password: string) {
    const user = await db.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException(`Email e/ou senha incorretos.`);
    }
    if (await bcrypt.compare(password, user.password)) {
      return this.createToken(user);
    } else {
      throw new UnauthorizedException(`Email e/ou senha incorretos.`);
    }
  }

  async forget(email: string) {
    const user = await db.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException(`Email incorreto.`);
    }
    return user;
  }

  async reset(password: string) {
    const id = '0';
    const user = await db.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
    return this.createToken(user);
  }

  async register(body: AuthRegisterDTO) {
    const user = await this.crude.createUser(body);
    return this.createToken(user);
  }
}
