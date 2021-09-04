import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'User email'})
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty()
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly role: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @ApiProperty()
  readonly imageUrl: string;
}

