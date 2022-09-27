import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { of } from 'rxjs';
import { ExampleBodyDto, ExampleParamDto, MixedDTO } from 'src/arguments/example.dto';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
    transform(value: MixedDTO, metadata: ArgumentMetadata) {
        console.log('ENTERING VALIDATION PIPE');

        console.log(value);
        console.log(metadata);

        if (value.params.param_1 != 33 || value.params.param_2 != 44) throw new BadRequestException('Validation error');

        console.log('EXITING VALIDATION PIPE');
        return value;
    }
}
