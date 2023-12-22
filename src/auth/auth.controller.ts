import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CrudeService } from 'src/user/crude.service';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthForgetDTO } from './dto/auth-forget.dto';
import { AuthResetDTO } from './dto/auth-reset.dto';
import { AuthService } from './auth.service';
import { Token } from 'src/decorators/header-token.decoretor';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from 'src/decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly crude: CrudeService,
    private readonly auth: AuthService,
  ) {}
  @Post('login')
  async login(@Body() body: AuthLoginDTO) {
    return this.auth.login(body.email, body.password);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDTO) {
    return this.auth.register(body);
  }

  @Post('forget')
  async forget(@Body() body: AuthForgetDTO) {
    return this.auth.forget(body.email);
  }

  @Post('reset')
  async reset(@Body() body: AuthResetDTO, @Token() token) {
    return this.auth.reset(body.password, token);
  }

  @UseGuards(AuthGuard)
  @Post('me')
  async me(@User() user) {
    return { user };
  }
}
