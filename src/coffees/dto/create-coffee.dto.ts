import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString() // Adding class validator makes the field required
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true }) // specifying each means the field is an array
  readonly flavors: string[];
}
