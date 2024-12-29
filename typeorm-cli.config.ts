import { Coffee } from './src/coffees/entities/coffee.entity';
import { CoffeeRefactor1735399914208 } from './src/migrations/1735399914208-CoffeeRefactor';
import { DataSource } from 'typeorm';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { SchemaSync1735400909618 } from 'src/migrations/1735400909618-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1735399914208, SchemaSync1735400909618],
});
