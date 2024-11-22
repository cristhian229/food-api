import { Transform } from "class-transformer"
import { IsEmail, IsString, MinLength } from "class-validator"


export class RegisterDto {
    

    @IsEmail()
    email:string

    @IsString()
    name:string

    @IsString()
    lastName:string

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(4)
    password:string



}