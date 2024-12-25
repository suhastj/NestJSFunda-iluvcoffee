import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
  // PartialType marks all the incoming fields as optional
  // Also inherits the validation rules from the CreateCoffeeDto
}
