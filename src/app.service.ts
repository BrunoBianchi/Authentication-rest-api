import { Injectable } from '@nestjs/common';
//Injectable pode ser injetavel em outras classes
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
