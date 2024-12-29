import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1735400909618 implements MigrationInterface {
  name = 'SchemaSync1735400909618';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
  }
}
