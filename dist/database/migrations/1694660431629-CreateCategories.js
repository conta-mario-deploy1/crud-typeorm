"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategories1694660431629 = void 0;
const typeorm_1 = require("typeorm");
class CreateCategories1694660431629 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "categories",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                    onUpdate: "CURRENT_TIMESTAMP",
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("categories");
    }
}
exports.CreateCategories1694660431629 = CreateCategories1694660431629;
