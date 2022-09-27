import { Body, Controller, Get, HttpCode, Param, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { Validate, ValidateNested } from 'class-validator';
import { AppService } from './app.service';
import { BodyAndParam, ExampleBodyDto, ExampleParamDto, MixedDTO } from './arguments/example.dto';
import { TestGuard } from './modules/auth/auth.guard';
import { CustomValidationPipe } from './validators/validators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/example/:param_1/validator/:param_2')
  @HttpCode(200)
  @UsePipes(CustomValidationPipe)
  @UseGuards(TestGuard)
  getHello(@BodyAndParam() args: MixedDTO): string {
    return this.appService.passValidation(args.params);
  }
}
