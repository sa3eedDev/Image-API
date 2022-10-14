"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var images_1 = require("../../controllers/images");
var router = (0, express_1.Router)();
// use Middlewares to check input file, cache, resize
router.get('/', images_1.checkInput, images_1.checkCache, images_1.resize);
exports.default = router;
