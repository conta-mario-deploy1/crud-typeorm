"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateVideoService_1 = require("../services/CreateVideoService");
class CreateVideoController {
    async handle(req, res) {
        const { name, description, duration, category_id } = req.body;
        const service = new CreateVideoService_1.CreateVideoService();
        const result = await service.execute({
            name,
            description,
            duration,
            category_id
        });
        if (result instanceof Error)
            return res.status(400).json({ error: result.message });
        return res.status(201).json(result);
    }
}
exports.default = new CreateVideoController;
