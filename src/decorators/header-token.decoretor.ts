import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const Token = createParamDecorator((_data:any,context:ExecutionContext)=>{
    return context.switchToHttp().getRequest().headers.authorization?context.switchToHttp().getRequest().headers.authorization.split('Bearer ')[1] : '';
})