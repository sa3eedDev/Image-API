"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var images_1 = __importDefault(require("./api/images"));
var router = (0, express_1.Router)();
// Router for images API
router.use('/api/images', images_1.default);
// Defualt homepage
router.get('/', function (req, res) {
    res.send('For image resizing go to /api/images?filename=[FILENAME]&width=[WIDTH]&height=[HEIGHT]');
});
exports.default = router;
