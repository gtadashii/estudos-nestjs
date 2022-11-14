import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class createUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}
