"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var supertest_1 = __importDefault(require("supertest"));
var request = (0, supertest_1.default)(index_1.default);
describe('test Server', function () {
    it('Server is running', function (done) {
        request.get('/').expect(200, done());
    });
});
