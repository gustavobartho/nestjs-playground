import { Injectable } from '@nestjs/common';
import { ExampleParamDto } from './arguments/example.dto';

@Injectable()
export class AppService {
  passValidation(params: ExampleParamDto): string {
    console.log('User id');
    console.log(params.param_1);

    console.log('Comment id');
    console.log(params.param_2);

    return 'Validation passed';
  }
}
