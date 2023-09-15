"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRepository = void 0;
const data_source_1 = require("../config/data-source");
const Category_entity_1 = require("../entities/Category.entity");
exports.categoryRepository = data_source_1.AppDataSource.getRepository(Category_entity_1.Category);
