import { Body, createParamDecorator, ExecutionContext, Param } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class ExampleParamDto {
    @IsNotEmpty()
    @IsNumber()
    param_1: number;

    @IsNotEmpty()
    @IsNumber()
    param_2: number;
}

export class ExampleBodyDto {
    @IsNotEmpty()
    @IsNumber()
    body_1: number;

    @IsNotEmpty()
    @IsNumber()
    body_2: number;
}

export class User {
    name: string;
    email: string;
}

export const BodyAndParam = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();

    let dto = new MixedDTO();
    dto.body = req.body;
    dto.params = req.params;
    dto.user = req.user;

    return dto;
});

export class MixedDTO {
    @Type(() => ExampleParamDto)
    params: ExampleParamDto;

    @Type(() => ExampleBodyDto)
    body: ExampleBodyDto;

    @Type(() => User)
    user: User;
}