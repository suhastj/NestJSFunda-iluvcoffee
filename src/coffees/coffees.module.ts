import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

// every Module can contain 4 properties: controllers, exports, imports, providers
@Module({ controllers: [CoffeesController], providers: [CoffeesService] })
export class CoffeesModule {}
