import { IsEmail, IsString, IsStrongPassword, isEmail } from "class-validator";

export class CreateUserDTO {
    @IsString()
    name:string;

    @IsEmail()
    email:string;
    
    @IsStrongPassword({minLength:6})
    password:string;

}