import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const ParamId = createParamDecorator(
  (_data: any, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().params.id;
  },
);
